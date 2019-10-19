import React, { Fragment, Component } from 'react';
import { withRouter } from "react-router";
import { MdSearch } from 'react-icons/md'

class Search extends Component {
    state = {
        query: '',
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
        const { history } = this.props;
        history.push(`/search/${this.state.query}`)
    }

    render() {
        return (
                <Fragment>
                    <form type="submit" onSubmit={this.handleSubmit} style={{ width: '175px', backgroundColor: '#293462', display: 'flex', justifyContent: 'conter', alignItems: 'center', border: '1px solid white' }}>
                        <input ref={input => (this.search = input)} onChange={this.handleInputChange} type="text" style={{ height: '19px', fontSize: '12px', marginRight: '4px', backgroundColor: 'transparent', border: 'none', color: 'white' }} />
                        <MdSearch style={{ color: 'white', cursor: 'pointer', marginLeft:'5px' }} onClick={this.handleSubmit}/>
                    </form>
                </Fragment>
                );
              }
            }
            
export default withRouter(Search);