import styled from 'styled-components';

// types
import { OrderInfo } from '../../types/profile';

// dummy-data
import orderListData from './orderListData.json';

// CSS
const StyledOrderStatusBox = styled.div`
  width: 75%;
  height: 80%;
  border: solid 1px #d8d8d8;
`;

const StyledInfoBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
  background-color: #f2f2f2;
`;

const StyledDateInfo = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  font-size: 14px;
`;

const StyledOrderListInfo = styled.div`
  width: 25%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  font-size: 14px;
`;

const StyledStatusInfo = styled.div`
  width: 25%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  font-size: 14px;
`;

const StyledCancelOrderInfo = styled.div`
  width: 25%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const StyledCancelButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const StyledOrderStatusListBox = styled.div`
  width: 100%;
  height: calc(100% - 50px);  // InfoBox의 높이 50px을 제외
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledOrderData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;

const OrderStatusPanel = () => {
  const typedOrderData: OrderInfo[] = orderListData as OrderInfo[];

  return (
    <StyledOrderStatusBox>
      <StyledInfoBox>
        <StyledDateInfo>신청 날짜</StyledDateInfo>
        <StyledOrderListInfo>주문 목록</StyledOrderListInfo>
        <StyledStatusInfo>상태</StyledStatusInfo>
        <StyledCancelOrderInfo>
          취소
        </StyledCancelOrderInfo>
      </StyledInfoBox>
      <StyledOrderStatusListBox>
        {typedOrderData.map((list: OrderInfo) => (
          <StyledOrderData key={list.orderId}>
            <StyledDateInfo>{list.orderDate}</StyledDateInfo>
            <StyledOrderListInfo>상세보기</StyledOrderListInfo>
            <StyledStatusInfo>{list.orderStatus}</StyledStatusInfo>
            <StyledCancelOrderInfo>
              {
                list.orderStatus === '대기' &&
                <StyledCancelButton>
                  주문 취소
                </StyledCancelButton>
              }
            </StyledCancelOrderInfo>
          </StyledOrderData>
        ))}
      </StyledOrderStatusListBox>
    </StyledOrderStatusBox>
  );
};

export default OrderStatusPanel;