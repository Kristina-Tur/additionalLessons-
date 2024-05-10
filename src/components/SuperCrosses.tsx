import React, {ReactNode} from 'react';

type Props = {
    croses: Array<CrosPropsType>
    children: ReactNode
}

type CrosPropsType = {
    id: number
    model: string
    size: string
}

export const SuperCrosses = ({croses, children}: Props) => {
    return (
        <div>
            <ul>
                {croses.map((el) => {
                    return (
                        <li>
                            <span>{el.id}</span>
                            <span>{el.model}</span>
                            <span>{el.size}</span>
                        </li>
                    )
                }) }
            </ul>
            <div>{children}</div>
            <span>----------------------------------</span>
        </div>
    );
};