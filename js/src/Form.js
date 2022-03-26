import React from "react";

function Form({ name }) {
    const [isPublished, setIsPublished] = React.useState(null);
    const [comming, setComming] = React.useState(null);

    let _handleRadio = (event) => {
        const isPublished = event.currentTarget.value === 'true' ? true : false;
        setIsPublished(isPublished)
        setComming(isPublished)
    }

    let _handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <form onSubmit={async (e) => await _handleSubmit(e)}>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        name="isPublished"
                        value="true"
                        checked={isPublished === true}
                        onChange={_handleRadio} />
                    Yes
                </label>
            </div>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        name="isPublished"
                        value="false"
                        checked={isPublished === false}
                        onChange={_handleRadio} />
                    No
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;