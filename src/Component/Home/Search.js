import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router";
import { FaSearch } from "react-icons/fa"

class Search extends Component {
    state = {
        query: '',
        results: []
    };

    componentDidUpdate(prevProps, prevState) {
        const { history } = this.props;
        if (prevState.results !== this.state.results) {
            history.push(`/search/${this.state.query}`);
        }
    }

    getInfo = () => {
                this.setState({
                    results: 'Oke'
                });
            
    };

    handleInputChange = e => {
        e.preventDefault();
        this.setState(
            {
                query: this.search.value
            },
        );
    };

    handleSubmit = e => {
        if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
                this.getInfo();
            }
        } else if (!this.state.query) {
        }
    }

    render() {
        return (
                <Fragment>
                    <form type="submit" onSubmit={this.handleSubmit} style={{ width: '175px', backgroundColor: '#293462', display: 'flex', justifyContent: 'conter', alignItems: 'center', border: '1px solid white' }}>
                        <input ref={input => (this.search = input)} onChange={this.handleInputChange} type="text" style={{ height: '19px', fontSize: '12px', marginRight: '4px', backgroundColor: 'transparent', border: 'none', color: 'white' }} />
                        <FaSearch style={{ color: 'white', cursor: 'pointer' }} />
                    </form>
                </Fragment>
                );
              }
            }
            
export default withRouter(Search);