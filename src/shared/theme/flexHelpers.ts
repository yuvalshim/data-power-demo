import styled, { css } from "styled-components";

export const flex = css`
  display: flex;
`;

export const flexCenter = css`
  ${flex};
  align-items: center;
  justify-content: center;
`;

export const FlexCenter = styled.div`
  ${flexCenter};
`;

export const flexColumn = css`
  ${flex};
  flex-direction: column;
`;

export const FlexColumn = styled.div`
  ${flexColumn};
`;

export const flexColumnCenter = css`
  ${flexColumn};
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled.div`
  ${flexColumnCenter};
`;

export const flexRow = css`
  ${flex};
  flex-direction: row;
`;

export const FlexRow = styled.div`
  ${flexRow};
`;

export const FlexWrap = styled.div`
  ${flex};
  flex-wrap: wrap;
`;

export const FlexRowCenter = styled.div`
  ${flexRow};
  align-items: center;
  justify-content: center;
`;

export const flexRowSpaceBetween = css`
  ${flexRow};
  align-items: center;
  justify-content: space-between;
`;

export const FlexRowSpaceBetween = styled.div`
  ${flexRow};
  align-items: center;
  justify-content: space-between;
`;

export const flexMiddle = css`
  ${flexRow};
  align-items: center;
`;

export const FlexMiddle = styled.div`
  ${flexRow};
  align-items: center;
`;
