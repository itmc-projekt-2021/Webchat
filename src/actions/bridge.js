/**
 * Call window.webchatMethods.applicationParse for messages
 * 
 * @param {Array} messages 
 * @param {Function} callback
 */
export const getApplicationParse = (messages, callback) => {
    if (!window.webchatMethods || !window.webchatMethods.applicationParse) return null
    try {
        const applicationParseResponse = window.webchatMethods.applicationParse(messages, callback)
        if (!applicationParseResponse) return null
        if (applicationParseResponse.then && typeof applicationParseResponse.then === 'function') {
            applicationParseResponse.then()
            .catch(console.error)
        }
    } catch (err) {
        console.error(err)
    }
}