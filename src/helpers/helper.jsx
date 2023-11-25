export const getPageTitle = (pathstring) => {
    // Remove leading and trailing spaces and the forward slash
    let trimmedString = pathstring.trim().slice(1);

    // Split the string into an array of words
    let wordsArray = trimmedString.split(" ");

    // Capitalize the first letter of each word and join them back into a string
    let title = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    if (!title) {
        title = "Home";
    }
    return title;
};
