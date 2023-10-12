const uploadValidation = (values) => {
    let errors = {};

    if (!values.task_headline) {
        errors.task_headline = "Task headline is required";
    } else if (values.task_headline.trim().length === 0) {
        errors.task_headline = "Task headline must contain at least 1 character";
    }

    if (!values.task_author) {
        errors.task_author = "Task author is required";
    } else if (values.task_author.trim().length === 0) {
        errors.task_author = "Task author must contain at least 1 character";
    }

    if (!values.task_summary) {
        errors.task_summary = "Task summary is required";
    } else if (values.task_summary.trim().length === 0) {
        errors.task_summary = "Task summary must contain at least 1 character";
    }

    if (!values.task_date) {
        errors.task_date = "Task date is required";
    }

    if (values.task_images.length === 0) {
        errors.task_images = "At least one task image is required";
    } else if (values.task_images.length > 3) {
        errors.task_images = "Only max. of 3 images are allowed";
    }

    if (values.task_tags.length === 0) {
        errors.task_tags = "At least one task tag is required";
    } else if (values.task_tags.length > 2) {
        errors.task_tags = "Only 2 can be selected";
    }

    return errors;
};

export default uploadValidation;
