module.exports = {
    getCurrentDateTime: () => {
      const now = new Date();
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      return now.toLocaleString('en-IN', options);
    }
  };