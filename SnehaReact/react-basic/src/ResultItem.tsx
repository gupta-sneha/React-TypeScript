import * as React from 'react';

interface Iprops{
    title: string
}

class ResultItem extends React.Component<Iprops>{
    public render(){
        return(
            <li>{this.props.title}</li>
        )
    }
}

export default ResultItem;