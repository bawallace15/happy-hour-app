import styles from './filter-box.module.css'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function FilterBox() {

    return (
        <div className={styles.container}>
            <Card className={styles.parent_card}>
                <CardContent>
                    Tell Us What You're Looking For
                </CardContent>
                <CardContent className={styles.menus_container}>
                    <div className={styles.menus_row}>
                        <FormControl className={styles.selector}>
                            <InputLabel>Area</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value={1}>Downtown</MenuItem>
                                <MenuItem value={2}>Docks</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={styles.selector}>
                            <InputLabel>Day</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value={1}>Monday</MenuItem>
                                <MenuItem value={2}>Tuesday</MenuItem>
                                <MenuItem value={3}>Wednesday</MenuItem>
                                <MenuItem value={4}>Thursday</MenuItem>
                                <MenuItem value={5}>Friday</MenuItem>
                                <MenuItem value={6}>Saturday</MenuItem>
                                <MenuItem value={7}>Sunday</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={styles.menus_row}>
                        <FormControl className={styles.selector}>
                            <InputLabel>Times</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value={1}>5</MenuItem>
                                <MenuItem value={2}>6</MenuItem>
                                <MenuItem value={3}>7</MenuItem>
                                <MenuItem value={4}>8</MenuItem>
                                <MenuItem value={5}>9</MenuItem>
                                <MenuItem value={6}>10</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={styles.selector}>
                            <InputLabel>Features</InputLabel>
                            <Select defaultValue="">
                                <MenuItem value={1}>Outdoor Seating</MenuItem>
                                <MenuItem value={2}>Rooftop</MenuItem>
                                <MenuItem value={3}>Water-Front</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}