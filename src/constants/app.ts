
const getApiBaseUrl = () => {
    if (import.meta.env.VITE_BACKEND_ENV === 'nodejs') {
        return import.meta.env.VITE_NODE_API_BASE_URL;
    } else {
        return import.meta.env.VITE_DOTNET_API_BASE_URL;
    }
}

export const API_BASE = getApiBaseUrl();
