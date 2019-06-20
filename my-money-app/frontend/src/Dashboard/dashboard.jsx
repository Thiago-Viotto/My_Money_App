import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import { getSummary } from './dashboardActions'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary()
    }

    calculateConsolityValue(credit, debt) {
        let total = credit-debt
        let result = parseFloat(total.toFixed(2))
        return result
    }
    
    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${parseFloat(credit.toFixed(2))}`}
                            text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${parseFloat(debt.toFixed(2))}`}
                            text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${this.calculateConsolityValue(credit,debt)}`}
                            text='Valor consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ summary: state.dashboard.summary })
const mapDispacthToProps = (dispact) => bindActionCreators({ getSummary }, dispact)

export default connect(mapStateToProps, mapDispacthToProps)(Dashboard)


