import styled from '@emotion/styled';

import { Container, Line, ReceiptTitle, Title, TotalPrice } from './shared';

import Text from '../Text';

import { CaseCardData } from '../../types';

const Receipt = styled.div<{ imagePath: string }>`
  position: relative;
  width: 200px;
  height: 240px;
  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 35px 22px 40px 25px;
  margin: -6px -5px -10px -9px;

  > p {
    color: #8f8f8f;
    margin-bottom: 6px;
  }

  > hr {
    margin: 14px 0 8px;
  }
`;

interface Props {
  card: CaseCardData;
}

function CaseCard({ card }: Props) {
  const {
    subtitle,
    title,
    receipt: { title: receiptTitle, items, totalPrice },
  } = card;

  return (
    <Container>
      <Title>
        <Text color="primary" weight={600}>
          {subtitle}
        </Text>
        <Text as="h4" color="black" size={24}>
          {title}
        </Text>
      </Title>
      <Receipt imagePath="/receipt-container.png">
        <ReceiptTitle>
          <Text color="black" weight={600}>
            {receiptTitle}
          </Text>
          <Line />
        </ReceiptTitle>
        {items.map((item) => (
          <Text key={item} weight={400}>
            {item}
          </Text>
        ))}
        <Line />
        <TotalPrice>
          <Text color="black" weight={600}>
            총
          </Text>
          <Text color="primary" size={20}>
            {totalPrice}
          </Text>
        </TotalPrice>
      </Receipt>
    </Container>
  );
}

export default CaseCard;
