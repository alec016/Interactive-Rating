import '../css/commons.scss'

export default function Rating(props){
    const setRating = props.rating_data
    const setRated = props.rated_data
    const rating = props.rating

    const select = (event) => {
        let numbers = document.querySelectorAll('.number-rating')
        numbers.forEach(element => {
            element.classList.remove('selected-number')
        });
        let ele = event.target
        setRating(ele.innerText)
        console.log(ele)
        ele.classList.add('selected-number')
    }
    
    const handleSubmit = () => {
        if(rating !== 0)
            setRated(true)
    }

    return(
        <div className="card bg-dark-blue">
            <div>
                <div className="round bg-medium-dark-blue light-grey w-20p flex">
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/>
                    </svg>
                </div>
            </div>
            <div>
                <p className="white w-700 fz-30">
                    How did we do?
                </p>
            </div>
            <div>
                <p className="light-grey">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>
            </div>
            
            <div className="flex row space-between">
                <div className="round bg-medium-dark-blue light-grey number-rating flex" onClick={select}>
                    1
                </div>
                <div className="round bg-medium-dark-blue light-grey number-rating flex" onClick={select}>
                    2
                </div>
                <div className="round bg-medium-dark-blue light-grey number-rating flex" onClick={select}>
                    3
                </div>
                <div className="round bg-medium-dark-blue light-grey number-rating flex" onClick={select}>
                    4
                </div>
                <div className="round bg-medium-dark-blue light-grey number-rating flex" onClick={select}>
                    5
                </div>
            </div>
            <div>
                <button className="bg-orange white submit" type="button" onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

