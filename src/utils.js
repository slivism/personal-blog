// Utility functions for the blog application

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

module.exports = { formatDate };