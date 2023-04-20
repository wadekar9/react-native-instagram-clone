import { Platform, PermissionsAndroid } from "react-native";

async function taekMediaPermission() {
    return new Promise( async (resolve, reject) => {
        const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        // console.log(status, permission,PermissionsAndroid.PERMISSIONS,hasPermission)
        if (hasPermission) {
            resolve(true);
        }

        const status = await PermissionsAndroid.request(permission);
        resolve(status === 'granted');
    })
}

export {
    taekMediaPermission
}