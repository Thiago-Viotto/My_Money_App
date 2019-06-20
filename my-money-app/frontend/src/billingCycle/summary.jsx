import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default class Summary extends Component {
    calculateConsolityValue(credit, debt) {
        let total = credit - debt
        let result = parseFloat(total.toFixed(2))
        return result
    }

    render() {
        const { credit, debt } = this.props
        return (
            <Grid cols='12'>
                <fieldset>
                    <legend>Resumo</legend>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${parseFloat(credit.toFixed(2))}`} text='Total de créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${parseFloat(debt.toFixed(2))}`} text='Total de débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${this.calculateConsolityValue(credit, debt)}`} text='Valor consolidado' />
                    </Row>
                </fieldset>
            </Grid>
        )
    }

}