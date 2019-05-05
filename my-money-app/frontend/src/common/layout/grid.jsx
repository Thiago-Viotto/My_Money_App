import React,{Component} from 'react'

export default class Grid extends Component{
    toCSSClasses(numbers){
        // Se o número veio setado, divide em espaços, se não retornar array vazio
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        // Pega o number passado e cria a classe bootstrap
        if(cols[0]) classes+=`col-xs-${cols[0]}`
        if(cols[1]) classes+=` col-sm-${cols[1]}`
        if(cols[2]) classes+=` col-md-${cols[2]}`
        if(cols[3]) classes+=` col-lg-${cols[3]}`

        return classes
    }

    render(){
        const gridClasses = this.toCSSClasses(this.props.cols || 12)
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}