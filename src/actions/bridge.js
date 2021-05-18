export const getApplicationParse = (messages, callback) => {
    if (!window.webchatMethods || !window.webchatMethods.applicationParse) return null
    try {
        const applicationParseResponse = window.webchatMethods.applicationParse(messages)
        if (!applicationParseResponse) return null
        if (applicationParseResponse.then && typeof applicationParseResponse.then === 'function') {
        return applicationParseResponse
            .then(callback)
            .catch(console.error)
        }
    } catch (err) {
        console.error(err)
    }
}