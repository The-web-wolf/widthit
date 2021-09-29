import { API } from "~/constants";
import getUrl from "~/utils/getUrl";
import { IItem } from "./getUserItems";

const updateItem = (item: IItem) => (
    fetch(getUrl(API.Items), {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
)

export default updateItem;