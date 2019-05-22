import React, { Component } from 'react'
import { bindActionCreator } from 'redux'
import { connect } from 'react-redux'

import { selectedTab } from './tabActions'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        return (
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;'
                    data-toggle='tab'
                    onClick = {() => this.props.selectedTab(this.props.target)}
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i>
                    {this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreator({selectedTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (TabHeader)