import styled from 'styled-components';
import createConfig from '../../services/service.create-config';
import getBuyInfo from '../../services/service.getBuyInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PlanContent = () => {
  const config = createConfig();
  const navigate = useNavigate();
  let buyInfo;
  const [content, setContent] = useState('');

  useEffect(() => {
    const promisse = getBuyInfo(config);

    promisse
      .then((res) => {
        buyInfo = res.data;

        const getDeliveryDate = (date) => {
          let now = new Date();
          let day = now.getDate();
          let month = now.getUTCMonth() + 1;
          let year = now.getFullYear();

          if (buyInfo.type === 'Mensal') {
            if (buyInfo.delivery_date === '1') {
              let dayToShow = 1;
              const monthToShow = month + date > 12 ? String((month + date - 12)).padStart(2, '0') : month + date;
              const yearToShow = (month + date) > 12 ? year + 1 : year;
              const weekDay = new Date(yearToShow, monthToShow - 1, dayToShow).getDay();

              if (weekDay === 0) {
                dayToShow++;
              }

              if (weekDay === 6) {
                dayToShow += 2;
              }

              return (
                <p>{dayToShow}/{monthToShow}/{yearToShow}</p>
              );

            }

            if (buyInfo.delivery_date === '2') {
              let dayToShow = 10;
              const monthToShow = month + date > 12 ? String((month + date - 12)).padStart(2, '0') : month + date;
              const yearToShow = (month + date) > 12 ? year + 1 : year;
              const weekDay = new Date(yearToShow, monthToShow - 1, dayToShow).getDay();

              if (weekDay === 0) {
                dayToShow++;
              }

              if (weekDay === 6) {
                dayToShow += 2;
              }

              return (
                <p>{dayToShow}/{monthToShow}/{yearToShow}</p>
              );
            }

            if (buyInfo.delivery_date === '3') {
              let dayToShow = 20;
              const monthToShow = month + date > 12 ? String((month + date - 12)).padStart(2, '0') : month + date;
              const yearToShow = (month + date) > 12 ? year + 1 : year;
              const weekDay = new Date(yearToShow, monthToShow - 1, dayToShow).getDay();

              if (weekDay === 0) {
                dayToShow++;
              }

              if (weekDay === 6) {
                dayToShow += 2;
              }

              return (
                <p>{dayToShow}/{monthToShow}/{yearToShow}</p>
              );
            }
          }

          const weekday = now.getDay();
          let dayDiference = (7 * date);
          const lastDay = (new Date(year, month, 0)).getDate();
          let dayToShow;
          let monthToShow;
          let yearToShow;

          if (buyInfo.delivery_date === '1') {
            if (weekday < 1) {
              dayDiference = 1 + (7 * (date - 1));
            }

            if (weekday > 1) {
              dayDiference = (7 * date) - (weekday - 1);
            }
          }

          if (buyInfo.delivery_date === '2') {
            if (weekday < 1) {
              dayDiference = 3 + (7 * (date - 1));
            }

            if (weekday > 1) {
              dayDiference = (7 * date) - (weekday - 3);
            }
          }

          if (buyInfo.delivery_date === '1') {
            if (weekday < 1) {
              dayDiference = 5 + (7 * (date - 1));
            }

            if (weekday > 1) {
              dayDiference = (7 * date) - (weekday - 5);
            }
          }

          dayToShow = ((day + dayDiference) > lastDay ? day + dayDiference - lastDay : day + dayDiference);
          monthToShow = (day + dayDiference) > lastDay ? month + 1 : month;
          yearToShow = monthToShow > 12 ? year + 1 : year;
          monthToShow = monthToShow > 12 ? monthToShow - 12 : monthToShow;

          return (
            <p>{String(dayToShow).padStart(2, '0')}/{String(monthToShow).padStart(2, '0')}/{yearToShow}</p>
          );
        };

        const getItens = () => {
          return (
            buyInfo.products.map((product, key) => {
              return (
                <p key={key}>{product.product_name}</p>
              );
            })
          );
        };

        setContent(
          <Content>
            <PlanInfoDiv>
              <InfoBuy>Plano: {buyInfo.type}</InfoBuy>
              <InfoBuy>Data de assinatura: {buyInfo.sign_date}</InfoBuy>
            </PlanInfoDiv>
            <DeliveryDate>
              <p>Próximas entregas:</p>
              <Dates>
                {getDeliveryDate(1)}
                {getDeliveryDate(2)}
                {getDeliveryDate(3)}
              </Dates>
            </DeliveryDate>
            <Itens>
              {getItens()}
            </Itens>
          </Content>
        );
      })
      .catch((error) => {
        /*
        alert('Parece que seu token expirou, favor logar novamente');
        navigate('/');
        */
      });
  }, []);

  return (
    <PlanContainer>
      <img src='https://raw.githubusercontent.com/driven-exercises/Projeto-GratiBox/main/image03.jpg' />
      {content}
    </PlanContainer>
  );
};

export default PlanContent;

const PlanContainer = styled.div`
  background-color: white;
  width: 80vw;
  height: 70vh;
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img{
    width: 90%;
    max-height: 50%;
    border-radius: 40px 40px 0 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PlanInfoDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const InfoBuy = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 5px 0;
  color: #4D65A8;
`;

const DeliveryDate = styled.div`
  p {
    font-weight: 700;
    font-size: 18px;
    margin: 5px 0;
    color: #4D65A8;
  }
`;

const Dates = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  p {
    font-weight: 700;
    font-size: 18px;
    margin: 5px 0;
    color: #4D65A8;
  }
`;