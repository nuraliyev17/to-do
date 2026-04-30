import { message, notification } from 'antd';

export const showMessage = (type, text) => {
    notification[type] ({
        message: type === 'success' ? 'Created' : 'Deleted successfully',
        description: text,
        placement: 'topRight',
    })
}