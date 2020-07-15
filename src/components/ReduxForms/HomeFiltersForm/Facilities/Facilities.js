import React, { useState } from 'react';
import { connect } from 'react-redux';
import { features } from '../../../../api/testFeatures'
import {
    setFeaturesCreator
} from '../../../../redux/actionHomeFilterCreators';


const Facilities = ({
    setFeaturesFunc
}) => {

    const [x, setForm] = useState(false);


    const handler = (e) => {
        const { target } = e;
        const { id } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (value === true) {

        } else {
            console.log(target.id)
        }

    };
    setFeaturesFunc(x)

    return (
        <div className="parametrs">
            <p className="label-filter">Удобства:</p>
            <div className="facilities">
                {features.map((fac, index) => {
                    return <span key={index} >
                        <input
                            type="checkbox"
                            id={"" + fac.name + ""}
                            value={"" + fac.name + ""}
                            onChange={handler}
                        />
                        <label htmlFor={"" + fac.name + ""}>{fac.name}</label>
                    </span>
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setFeaturesFunc: (ads) => dispatch(setFeaturesCreator(ads)),
});

const Enhanced = connect(null, mapDispatchToProps)(Facilities);

export { Enhanced as Facilities };