import {
    CheckboxFormsy,
    FuseChipSelectFormsy,
    RadioGroupFormsy,
    SelectFormsy,
    TextFieldFormsy
} from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Formsy from 'formsy-react';
import { useRef, useState } from 'react';

const suggestions = ['Sea', 'Sky', 'Forest', 'Aerial', 'Art'].map(item => ({
    value: item,
    label: item
}));

function SimpleFormExample()
{
    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    function disableButton()
    {
        setIsFormValid(false);
    }

    function enableButton()
    {
        setIsFormValid(true);
    }

    function handleSubmit(model)
    {
        console.info('submit', model);
    }

    return (
        <div className="max-w-sm">
            <Typography className="h2 mb-24">Example Formsy Form</Typography>
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center"
            >
                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="name"
                    label="Name"
                    validations={{
                        minLength: 4,
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4',
                    }}
                    required
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email"
                    label="Email"
					validations={{
						isEmail: true,
					}}
					validationErrors={{
						isEmail: "This is not a valid email"
					}}
                    required
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="name-outlined"
                    label="Name (Outlined)"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    required
                    variant="outlined"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email-outlined"
                    label="Email (Outlined)"
					validations={{
						isEmail: true,
					}}
					validationErrors={{
						isEmail: "This is not a valid email"
					}}
                    required
                    variant="outlined"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="name-filled"
                    label="Name (Filled)"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: 'Min character length is 4'
                    }}
                    required
                    variant="filled"
                />

                <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="email-filled"
                    label="Email (Filled)"
					validations={{
						isEmail: true,
					}}
					validationErrors={{
						isEmail: "This is not a valid email"
					}}
                    required
                    variant="filled"
                />

                <RadioGroupFormsy
                    className="my-16"
                    name="gender"
                    label="Gender"
                    validations="equals:female"
                    validationError="Only ladies are accepted"
                    required
                >
                    <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>
                    <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>
                    <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other"/>
                    <FormControlLabel value="disabled" disabled control={<Radio/>} label="(Disabled option)"/>
                </RadioGroupFormsy>

                <SelectFormsy
                    className="my-16"
                    name="related"
                    label="Related with"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>

                <SelectFormsy
                    className="my-16"
                    name="related-outlined"
                    label="Related with (Outlined)"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                    variant="outlined"
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>

                <SelectFormsy
                    className="my-16"
                    name="related-filled"
                    label="Related with (Filled)"
                    value="none"
                    validations="equals:none"
                    validationError="Must be None"
                    variant="filled"
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                </SelectFormsy>

                <CheckboxFormsy
                    className="my-16"
                    name="accept"
                    value={false}
                    label="Accept"
					validations={{
						equals: true,
					}}
					validationErrors={{
						equals: "You need to accept"
					}}
                />

                <FuseChipSelectFormsy
                    className="my-16"
                    name="tags"
                    placeholder="Select multiple tags"
                    textFieldProps={{
                        label          : 'Tags',
                        InputLabelProps: {
                            shrink: true
                        },
                        variant        : 'standard'
                    }}
                    options={suggestions}
                    isMulti
                    validations={{minLength: 2}}
                    validationErrors={{
                        minLength: 'You need to select at least two'
                    }}
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="mx-auto mt-32 mb-80"
                    aria-label="LOG IN"
                    disabled={!isFormValid}
                >
                    Can submit
                </Button>
            </Formsy>
        </div>
    );
}

export default SimpleFormExample;
