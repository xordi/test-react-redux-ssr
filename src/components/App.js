import { Component } from 'react';
import Counter from './Counter';

export default class App extends Component{
    render(){
        return (
            <div>
                <h1>This is the SSR react application</h1>
                <Counter />
            </div>
        );
    }
}