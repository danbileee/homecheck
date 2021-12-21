import styled from '@emotion/styled';

export const Container = styled.div`
  width: fit-content;
  background-color: #eaeaea;
  padding: 50px 30px 45px;
  border-radius: 8px;
`;

export const Title = styled.div<{ align?: 'left' | 'center' }>`
  text-align: ${({ align = 'left' }) => align};

  > h4 {
    margin: 6px 0 20px;
  }
`;

export const ReceiptTitle = styled.div`
  width: fit-content;
  margin: 0 auto 18px;

  > hr {
    margin: 6px 0 0;
  }
`;

export const Line = styled.hr`
  border: 0;
  border-bottom: 2px dashed var(--black);
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  margin-bottom: 16px;

  > :first-child {
    margin-top: 1px;
  }
`;
