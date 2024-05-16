import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";

type CityPropsType = {
    data: Array<MoneyType>
}

export const City = ({data}: CityPropsType) => {
// с деструктуризацией пожалуйста


    // const mappedMoney = props.data.map((el: MoneyType, index) => (
    //     <CurrentBankomat
    //         key={el.id}
    //         money={el}
    //     />
    // ))

    return (
        <div>
         Одна банконота-одна компонента
        </div>
    );
};

/*
const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`*/
