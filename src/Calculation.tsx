import React, { Component } from 'react'

export interface Props {
    action?: string,
    actionDescription?: string,
}

export interface CalcStates {
    count: number
}

export interface CalcActions {
    add: string,
    minus: string,
}

const actions: CalcActions = {
    add: 'ADD',
    minus: 'MINUS',
}

export default class Calculation extends Component<Props, CalcStates> {

    readonly state = {
        count: 0
    }

    handleClick = (): void => {
        const { action = actions.add } = this.props
        const { count } = this.state
        if (action === actions.add) {
            this.setState({
                count: count + 1
            })
        }

        if (action === actions.minus) {
            this.setState({
                count: count - 1
            })
        }
    }

    render() {
        const { actionDescription = '点击以增加数目' } = this.props
        return (
            <div>
                <div>
                    当前计数为；{this.state.count}
                </div>
                <button
                    onClick={this.handleClick}
                >
                    {actionDescription}
                </button>
            </div>
        )
    }
}
