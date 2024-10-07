function carousel() {
    return {
        current: 0,
        total: 4, // Total number of reviews
        next() {
            this.current = (this.current + 1) % this.total;
        },
        prev() {
            this.current = (this.current - 1 + this.total) % this.total;
        }
    }
}