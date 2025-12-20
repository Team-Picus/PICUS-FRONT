import styled from '@emotion/styled';
import { expertDetailInfoMock } from '@widget/my/feature/mock.ts';

const ExpertInfo = () => {
  const { activity_career, projects, skills, activity_area, studio } = expertDetailInfoMock;

  const cameras = skills?.filter((s) => s.skill_type === 'CAMERA');
  const lights = skills?.filter((s) => s.skill_type === 'LIGHT');
  const edits = skills?.filter((s) => s.skill_type === 'EDIT');

  return (
    <ExpertInfoContainer>
      <InfoSection>
        <InfoRow>
          <InfoLabel>경력</InfoLabel>
          <InfoValue>{`${activity_career}차`}</InfoValue>
        </InfoRow>

        {projects && (
          <InfoRow>
            <InfoLabel>이력</InfoLabel>
            <ProjectList>
              {projects.map((p) => (
                <ProjectItem key={p.projectNo}>
                  <InfoValue>{p.project_name}</InfoValue>
                  <ProjectPeriod>{`25. 04 ~ 25. 05`}</ProjectPeriod>
                </ProjectItem>
              ))}
            </ProjectList>
          </InfoRow>
        )}

        {skills && (
          <InfoRow>
            <InfoLabel>보유기술</InfoLabel>
            <RowContent>
              {cameras && (
                <ContentGroup>
                  <GroupLabel>카메라 기종</GroupLabel>
                  {cameras.map((t, idx) => (
                    <InfoValue key={`camera-${idx}`}>{t.content}</InfoValue>
                  ))}
                </ContentGroup>
              )}

              {lights && (
                <ContentGroup>
                  <GroupLabel>조명</GroupLabel>
                  {lights.map((t, idx) => (
                    <InfoValue key={`light-${idx}`}>{t.content}</InfoValue>
                  ))}
                </ContentGroup>
              )}

              {edits && (
                <ContentGroup>
                  <GroupLabel>편집</GroupLabel>
                  {edits.map((t, idx) => (
                    <InfoValue key={`edit-${idx}`}>{t.content}</InfoValue>
                  ))}
                </ContentGroup>
              )}
            </RowContent>
          </InfoRow>
        )}

        <InfoRow>
          <InfoLabel>활동지역</InfoLabel>
          <AreaList>
            {activity_area.map((a) => (
              <InfoValue key={a}>{a}</InfoValue>
            ))}
          </AreaList>
        </InfoRow>
      </InfoSection>

      <SectionDivider />

      {studio && (
        <InfoSection>
          <InfoRow>
            <InfoLabel>소속</InfoLabel>
            <RowContent>
              <InfoValue>{studio.studio_name}</InfoValue>
              <ContentGroup>
                <GroupLabel>직원 수</GroupLabel>
                <InfoValue>{`${studio.employees_count}명`}</InfoValue>
              </ContentGroup>
              <ContentGroup>
                <GroupLabel>영업 시간</GroupLabel>
                <InfoValue>{studio.business_hours}</InfoValue>
              </ContentGroup>
            </RowContent>
          </InfoRow>
          <InfoRow>
            <InfoLabel>주소</InfoLabel>
            <InfoValue>{studio.address}</InfoValue>
          </InfoRow>
        </InfoSection>
      )}
    </ExpertInfoContainer>
  );
};

export default ExpertInfo;

const ExpertInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 40px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 73px 1fr;
  align-items: start;
`;

const InfoLabel = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const InfoValue = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.lightMode.text.text1};
  line-height: 150%;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectPeriod = styled.div`
  font: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.lightMode.text.text3};
  line-height: 150%;
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GroupLabel = styled.div`
  font: ${({ theme }) => theme.fonts.labelS};
  color: ${({ theme }) => theme.colors.lightMode.text.text4};
`;

const AreaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SectionDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.lightMode.neutral.neutral100};
`;
