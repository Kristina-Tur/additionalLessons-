import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import s from './superButton.module.css'

type Props = {
    background?: string
} & ButtonHTMLAttributes<HTMLButtonElement> /*& ComponentPropsWithoutRef<'input'>*/
    & Omit<ColorsProps, 'color4' | 'color5'> /*& добавить, Omit исключить T*/

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

export const SuperButton = ({
                                title,
                                onClick,
                                children,
                                className,
                                disabled,
                                color,
                                ...restProps/*(сюда попадают остатки пропсов. ctrl + пробел)*/
                            }: Props) => {
    console.log(color)

    /*const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : color === 'red'
                ? ' ' + s.red
                : color === 'secondary'
                    ? ' ' + s.secondary
                    : ' ' + s.default)
        + (className ? ' ' + className : '')*/

    /*const finalClassName = s.button + ' ' + s.red*/
    /*const finalClassName = `${s.button} ${s.red}`*/
    /*const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : s.secondary}
    ${disabled ? s.disabled : ''}
    `*/
    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary: s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        <button
            onClick={onClick}
            className={finalClassName}
            {...restProps}>
            {children}
        </button>
    );
};

/*
import React, {ReactNode} from 'react';

type Props = {
    title?: string
    onClick: () => void
    children: ReactNode
    color?: string
}

export const SuperButton = (props: Props) => {
    const {title, onClick, children, ...restProps/!*(сюда попадают остатки пропсов)*!/} = props
    console.log(restProps.color)
    return (
        <button onClick={() => onClick()}>{children}</button>
    );
};*/
