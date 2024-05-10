import React, {useState} from 'react';
import './App.css';
import {Modal} from './components/modal/Modal';
import {SuperButton} from './components/SuperButton';
import s from './components/superButton.module.css'
import sm from 'components/modal/Modal.module.css'
import {SuperCrosses} from './components/SuperCrosses';

function App() {
    const onClickHandler = () => {
        alert('Im Super button')
    }

    const croses = [
        {id: 1, model: 'ADIDAS', size: 'XXX'},
        {id: 2, model: 'ABIBAS', size: 'YYY'},
        {id: 3, model: 'PUMA', size: 'ZZZ'}
    ]

    return (
        <div>
            {/*<SuperButton
                className={s.red}
                onClick={onClickHandler}
            >
                SuperButtonRED
            </SuperButton>*/}

            {/*<SuperButton color={'red'}>Red SUPERBUTTON</SuperButton>
            <SuperButton color={'secondary'}>Secondary SUPERBUTTON</SuperButton>
            <SuperButton>Default SUPERBUTTON</SuperButton>
            <SuperButton disabled>Disabled SUPERBUTTON</SuperButton>*/}

            {/*<SuperCrosses croses={croses}>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <SuperButton
                    className={s.red}
                    onClick={onClickHandler}
                >
                    SuperButtonRED
                </SuperButton>
                <SuperButton
                    className={s.red}
                    onClick={onClickHandler}
                >
                    SuperButtonRED
                </SuperButton>
            </SuperCrosses>*/}
            {/*<SuperCrosses croses={croses}>
                <p>Много текста</p>
                <p>Много текста</p>
                <SuperButton color={'red'}>Red SUPERBUTTON</SuperButton>
                <SuperButton color={'secondary'}>Secondary SUPERBUTTON</SuperButton>
                <SuperButton>Default SUPERBUTTON</SuperButton>
                <SuperButton disabled>Disabled SUPERBUTTON</SuperButton>
            </SuperCrosses>*/}
            {/*<SuperCrosses croses={croses}>
                <div><input/></div>
                <div><input/></div>
                <div><input/></div>
                <div><input/></div>
                <div><input/></div>
                <div><input/></div>
                <div><input/></div>
                <div><input/></div>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <p>Много текста</p>
                <SuperButton
                    className={s.green}
                    onClick={onClickHandler}
                >
                    SuperButtonRED
                </SuperButton>
            </SuperCrosses>*/}


            {/*<Modal>
                <input type={'email'}/>
                <input type={'password'}/>
                <SuperButton>Send</SuperButton>
            </Modal>*/}
            <Modal>
                <p>DDDDDDDDDDDD</p>
                <input type={'email'}/>
                <input type={'password'}/>
                <input type={'password'}/>
                <div><input type={'checkbox'}/>
                    <span>I agree</span></div>
                <SuperButton>Send</SuperButton>
            </Modal>


        </div>
    );
}


export default App;
