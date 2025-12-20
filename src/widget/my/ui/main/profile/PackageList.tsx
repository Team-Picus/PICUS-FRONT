import styled from '@emotion/styled';
import { Fragment, useState } from 'react';
import type { ThemePackage } from '@shared/components/PackageItem.tsx';
import PackageItem from '@shared/components/PackageItem.tsx';

interface PackageListProps {
  packages: ThemePackage[];
}

const PackageList = ({ packages }: PackageListProps) => {
  const [openPackageIds, setOpenPackageIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenPackageIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  return (
    <PackageListContainer>
      {packages.map((pkg, idx) => {
        const isSelected = openPackageIds.includes(pkg.id);

        return (
          <Fragment key={pkg.id}>
            <PackageItem
              pkg={pkg}
              selectionType="drop"
              selected={isSelected}
              onToggle={() => handleToggle(pkg.id)}
            />
            {idx !== packages.length - 1 && <Divider aria-hidden="true" />}
          </Fragment>
        );
      })}
    </PackageListContainer>
  );
};

export default PackageList;

const PackageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.lightMode.divider.divider1};
`;
