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
        // name 
        setClicked(!clicked);
    }

    return (
        <>
            {clicked ?
                <h1>clicked</h1>
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
                    <button type="submit">Потвърждавам избора си</button>
                    <h2>{name}</h2>

                </form >}
        </>
    );
}

export default Form;