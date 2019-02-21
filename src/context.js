import React from 'react'

const Context = React.createContext()

class AppContextProvider extends React.Component {
    state = {
        checked: false,
        parentFirst: '',
        parentLast: '',
        studentFirst: '',
        studentLast: '',
        value: '',
        email: '',
        phone: '',
        message: '',
        warning: null,
        whenToContact: '',
        loaded: false,
        error: null,
        reviews: [],
        avgReview: 0,
        visible: false,
        refrence: '',
        age: 0,
        grade: [
            { key: 'p', text: '1st - 6th', value: '1st - 6th' },
            { key: 's', text: '7th', value: '7th' },
            { key: 'e', text: '8th', value: '8th' },
            { key: 'n', text: '9th', value: '9th' },
            { key: 't', text: '10th', value: '10th' },
            { key: 'el', text: '11th', value: '11th' },
            { key: 't', text: '12th', value: '12th' },
            { key: 'u', text: 'Undergraduate', value: 'Undergraduate' },
            { key: 'o', text: 'Other', value: 'Other' },
        ],
        options: [
            { key: 'm', text: 'Mathematics', value: 'Mathematics' },
            { key: 'p', text: 'Physics', value: 'Physics' },
            { key: 's', text: 'SAT Math Prep', value: 'SAT Math Prep' },
            { key: 'c', text: 'Academic Coaching', value: 'Academic Coaching' },
        ],
        school: '',
      }
    
    handleDropChange = (e, { value }) => this.setState({ value })

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAvgReviews = () => {
        const total = this.state.reviews.reduce((accum, review) => {
            return accum + review.rating
        }, 0)
        const avg = total / this.state.reviews.length
        this.setState({ avgReview: avg.toFixed(2) })
        return avg.toFixed(2)
    }
    

    fetchReviews = () => {
        return fetch('https://mat-flow.herokuapp.com/reviews')
            .then(res => res.json())
            .then(res => this.setState({ reviews: res.reviews }))
            .then(this.getAvgReviews)
    }
    

    postMessage = (e) => {
        e.preventDefault()
        const data = {
            parentFname: this.state.parentFirst,
            parentLname: this.state.parentLast,
            studentFname: this.state.studentFirst,
            studentLname: this.state.studentLast,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
            subject: this.state.value,
            asap: this.state.checked,
            whenToContact: this.state.whenToContact
        }
        fetch('https://mat-flow.herokuapp.com/send', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    this.setState({
                        warning: 'success',
                        radioValue: null,
                        parentFirst: '',
                        parentLast: '',
                        studentFirst: '',
                        studentLast: '',
                        value: '',
                        email: '',
                        phone: '',
                        message: '',
                    })
                }
                return res
            })
            .catch(err => console.error(err))
    }

    errorHandler = (err) => {
        console.error(err)
        this.setState({ error: true })
    }


    render() {
        return (
            <Context.Provider
                value={{
                    data: { ...this.state },
                    actions: {
                        handleDropChange: this.handleDropChange,
                        postMessage: this.postMessage,
                        handleChange: this.handleChange,
                        fetchReviews: this.fetchReviews
                    },
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default { Provider: AppContextProvider, Consumer: Context.Consumer }
