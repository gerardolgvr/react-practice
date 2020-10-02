import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {
                name: '',
                birthdate: '',
            },
            categories: [],
            flavors: [],
            value: 'lime',
            loading: true,
        };

        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ author: this.props.author});
        this.setState({ categories: this.props.authorCategories});  // esto puede hacerse en un solo setState
        this.setState({ flavors: this.props.flavors});
        this.setState({ loading: false});

        console.log('component did mount and props', this.props);
    }

    onChangeAuthor = (event) => {
        this.setState({ authorName:  event.target.value})
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        // whatever request you have to do
        alert('Your form has been sent');
        event.preventDefault();
    }

    onChangeCheckbox = (i) => (event) =>{
        const auxCategories = [ ...this.state.categories ];
        auxCategories[i].isChecked = !auxCategories[i].isChecked;
        this.setState({ categories: auxCategories });
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="author">Author:</label>
                    <input id="author" onChange={this.onChangeAuthor} value={this.state.author.name} type="text" />

                    <br/>
                    <br/>

                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            { !this.state.loading && (
                                this.state.flavors.map((flavor, i) =>{
                                    return(
                                        <option key={flavor.id} value={flavor.label}>{flavor.field}</option>
                                    )
                                })
                            )}
                        </select>
                    </label>

                    <br/>
                    <br/>

                    { !this.state.loading  && (
                        this.state.categories.map((category, i) =>{
                            return(
                                <label key={category.id} className="checkbox-checked">
                                    <input
                                        type="checkbox"
                                        checked={category.isChecked}
                                        onChange={this.onChangeCheckbox(i)}
                                        value={category.name}/>
                                    <span className="label-text">{category.name}</span>
                                </label>
                            )
                        })
                    )}

                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />

                </form>

            </div>
        );
    }


}

export default App;
