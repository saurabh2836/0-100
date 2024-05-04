import { atom, selector ,atomFamily} from "recoil";
import axios from "axios";
import { TODOS } from "./todos";
// export const networkAtom = atom({
//         key:"networkAtom",
//         default:104
// })
 
// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// })
// export const notificationsAtom = atom({
//     key:"notificationAtom",
//     default:12
// })
// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// })

// export const notifications = atom({
//     key:"networkAtom",
//     default:selector({
//         key:"networkAtomSelector",
//         get:async()=>{
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data
//         }
//     })
// })

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get:({get}) =>{
//             const allNotification = get(notifications);
//             return allNotification.network + allNotification.jobs + allNotification.notifications + allNotification.messaging
//             // const jobsAtomCount = get(jobsAtom);
//             // const notificationAtomCount = get(notificationsAtom);
//             // const messagingAtomCount = get(messagingAtom);
//             // return  networkAtomCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
//     }
// })

export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    default:id=>{
        return TODOS.find(x=>x.id === id)
    },
});