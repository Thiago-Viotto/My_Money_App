import React, { Component } from 'react'
import Grid from '../common/layout/Grid'
import { Field } from 'redux-form'
import Input from '../common/input'

class CreditList extends Component {

    renderRows() {
        return (
            <tr>
                <td><Field name='credits[0].name' component={Input}
                    placeholder='Informe o nome' readOnly={this.props.readOnly} /> </td>
                <td><Field name='credits[0].value' component={Input}
                    placeholder='Informe o valor' readOnly={this.props.readOnly} /> </td>
                <td></td>
            </tr>
        )
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </table>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </fieldset>
            </Grid>

        )
    }
}

export default CreditList