import MovieFactoryAPI from '@/api/moviefactory.api'

class MovieFactoryService {
    async getFacts() {
        try {
            const response = await MovieFactoryAPI.getFacts()
            if (response && response.data) {
                return response.data
            }
        } catch (error) {
            throw error
        }
    }
}
export default new MovieFactoryService()