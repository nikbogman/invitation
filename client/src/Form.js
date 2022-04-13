import React from "react";
import './Form.css';

function Form({ name }) {
    const [coming, setComing] = React.useState(null);
    const [clicked, setClicked] = React.useState(false);

    let _handleRadio = (event) => {
        const coming = event.currentTarget.value === 'true' ? true : false;
        setComing(coming);
    }

    let _handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setClicked(!clicked);
        await fetch(
            `${process.env.REACT_APP_SERVER_URL}teachers/`,
            {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, coming })
            }
        )
    }

    return (
        <div className="Form">
            {clicked ?
                <h3>Благодарим за отделеното внимание!</h3>
                :
                <form onSubmit={async (e) => await _handleSubmit(e)}>
                    < div className="radio" >
                        <label>
                            <input
                                type="radio"
                                name="coming"
                                value="true"
                                checked={coming === true}
                                onChange={_handleRadio} />
                            Ще присъствам
                        </label>
                    </div >
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="coming"
                                value="false"
                                checked={coming === false}
                                onChange={_handleRadio} />
                            Няма да присъствам
                        </label>
                    </div>
                    <button type="submit">Потвърди</button>
                </form >}
        </div>
    );
}

export default Form;