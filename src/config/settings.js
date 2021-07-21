export const apiBaseUrl = process.env.VUE_APP_API_ENDPOINT

export const apiKey = process.env.VUE_APP_API_KEY

export const loadingSpinnerConfig = {
    container: null,
    canCancel: false,
    onCancel: null,
    color: '#1F42A2',
    loader: 'dots',
    backgroundColor: '#000000',
    opacity: 0,
    height: 90,
    width: 90
}