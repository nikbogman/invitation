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

		// fixed no option for no (add !!)
        if (!!coming) return alert("Трябва да изберете преди да потвърдите")
        setClicked(!clicked);

        await fetch('http://api.confest.im/teachers/', {
                method: 'POST',
                // mode:"no-cors",
                // https://han.gl/TkiNv - this doesn't work
                headers: {'Content-Type':'application/json', 'Accept':'application/json'},
                body: JSON.stringify({
                	name:name,
                	coming:coming
               	})
            })
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
