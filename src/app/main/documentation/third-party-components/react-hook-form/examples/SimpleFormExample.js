import {useForm, Controller} from "react-hook-form";
import ReactSelect from "react-select";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Switch from "@material-ui/core/Switch"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"
import Typography from "@material-ui/core/Typography"

let renderCount = 0;

const options = [
    {
        value: "chocolate",
        label: "Chocolate"
    },
    {
        value: "strawberry",
        label: "Strawberry"
    },
    {
        value: "vanilla",
        label: "Vanilla"
    }
];

const defaultValues = {
    Native     : "",
    TextField  : "",
    Select     : "",
    ReactSelect: "",
    Checkbox   : false,
    switch     : false,
    RadioGroup : ""
};

function SimpleFormExample()
{
    const {
        handleSubmit,
        register,
        reset,
        control,
        watch
    } = useForm({
        defaultValues,
        mode: "onChange"
    });
    renderCount++;

    const data = watch();

    return (
        <div className="flex w-full max-w-screen-md justify-start items-start">
            <form className="w-1/2" onSubmit={handleSubmit(data => console.info(data))}>
                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">Native Input:</Typography>
                    <input className="border-1 outline-none rounded-8 p-8" {...register('Native')} />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI Checkbox</Typography>
                    <Controller
                        name="Checkbox"
                        type="checkbox"
                        control={control}
                        defaultValue={false}
                        render={({ field: {onChange, value} }) => (
                            <Checkbox
                                checked={value}
                                onChange={ev => onChange(ev.target.checked)}
                            />
                        )}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">Radio Group</Typography>
                    <Controller
                        render={({ field }) => (
                            <RadioGroup {...field} aria-label="gender" name="gender1">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio/>}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio/>}
                                    label="Male"
                                />
                            </RadioGroup>
                        )}
                        name="RadioGroup"
                        control={control}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI TextField</Typography>
                    <Controller render={({ field }) => <TextField { ...field } variant="outlined"/>} name="TextField" control={control}/>
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI Select</Typography>
                    <Controller
                        render={({ field }) => (
                            <Select {...field} variant="outlined">
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        )}
                        name="Select"
                        control={control}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">MUI Switch</Typography>
                    <Controller
                        name="switch"
                        type="checkbox"
                        control={control}
                        defaultValue={false}
                        render={({ field: {onChange, value} }) => (
                            <Switch
                                checked={value}
                                onChange={ev => onChange(ev.target.checked)}
                            />
                        )}
                    />
                </div>

                <div className="mt-48 mb-16">
                    <Typography className="mb-24 font-medium text-14">React Select</Typography>
                    <Controller
                        render={({ field }) => <ReactSelect {...field}/>}
                        options={options}
                        name="ReactSelect"
                        isClearable
                        control={control}
                        onChange={([selected]) => {
                            return {value: selected};
                        }}
                    />
                </div>

                <div className="flex my-48 items-center">

                    <Button className="mx-8" variant="contained" color="secondary" type="submit">Submit</Button>

                    <Button
                        className="mx-8"
                        type="button"
                        onClick={() => {
                            reset(defaultValues);
                        }}
                    >
                        Reset Form
                    </Button>

                </div>

            </form>

            <div className="w-1/2 my-48 p-24">

                <pre className="language-js p-24 w-400">
                    {JSON.stringify(data, null, 2)}
                </pre>

                <Typography className="mt-16 font-medium text-12 italic" color="textSecondary">Render Count: {renderCount}</Typography>
            </div>
        </div>
    );
}

export default SimpleFormExample;
