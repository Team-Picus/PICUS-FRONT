import styled from '@emotion/styled';
import InlineButton from '@shared/components/InlineButton.tsx';

/**
 * 왼쪽(ghost) 버튼은 옵션(필요할 때만 표시)
 * 오른쪽(secondary) 버튼은 항상 표시
 *
 * GhostPart 유니온 타입으로 props를 강제
 * - showGhost=false면 ghost 관련 props: never
 * - hasCount=false면 관련 props: never
 * - hasCount=true면 checkedCount required
 */
type GhostPart =
  // ghost 사용 & count 미사용
  | {
      showGhost: true; // ghost 버튼 사용 여부
      ghostText: string; // ghost 버튼 라벨
      hasCount?: false; // count 사용 여부 (true일 때 checkedCount required)
      checkedCount?: never; // 선택된 개수
      hideCount?: never; // true면 count 숨김
    }
  // ghost 사용 & count 사용
  | {
      showGhost: true;
      ghostText: string;
      hasCount: true;
      checkedCount: number;
      hideCount?: boolean;
    }
  // ghost 미사용
  | {
      showGhost: false;
      ghostText?: never;
      hasCount?: never;
      checkedCount?: never;
      hideCount?: never;
    };

type BottomTapProps = GhostPart & {
  secondaryText: string; // 오른쪽(secondary) 버튼 라벨
  ghostDisabled?: boolean;
  secondaryDisabled?: boolean;
  onGhostClick?: () => void;
  onSecondaryClick?: () => void;
};

const BottomTap = (props: BottomTapProps) => {
  // 오른쪽 버튼만 있는지 여부 (for pushRight)
  const onlySecondary = !props.showGhost;

  // count 모드일 때 checkedCount가 0이면 ghost 버튼을 자동 비활성화
  const isGhostCountInactive = props.showGhost && props.hasCount ? props.checkedCount === 0 : false;

  // ghostDisabled를 외부에서 주더라도 count가 0이면 무조건 비활성
  const resolvedGhostDisabled = Boolean(props.ghostDisabled) || isGhostCountInactive;

  const handleGhostClick = () => {
    if (resolvedGhostDisabled) return;
    props.onGhostClick?.();
  };

  return (
    <TabContainer>
      {props.showGhost && (
        <InlineButton
          variant="ghost"
          size="L"
          text={props.ghostText}
          disabled={resolvedGhostDisabled}
          onClick={handleGhostClick}
          hasCount={props.hasCount === true}
          checkedCount={props.hasCount ? props.checkedCount : undefined}
          hideCount={props.hasCount ? props.hideCount : undefined}
        />
      )}
      <InlineButton
        variant="secondary"
        size="L"
        width={onlySecondary ? '150px' : undefined}
        text={props.secondaryText}
        disabled={props.secondaryDisabled}
        pushRight={onlySecondary}
        onClick={props.onSecondaryClick}
      />
    </TabContainer>
  );
};

export default BottomTap;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  box-shadow: 0 -1px 14px 0 #0000000d;
  border-top: 1px;
  padding: 8px 16px;
  gap: 12px;
  margin-top: auto;
`;
