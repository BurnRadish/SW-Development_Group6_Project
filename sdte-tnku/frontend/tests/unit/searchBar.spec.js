import {render, fireEvent, screen} from '@testing-library/vue'
import Component from '../../src/components/searchBar.vue'

describe('Test v-model', () => {
        test('searchbar case 1', async () => {
            const {getByTestId} = render(Component)
        
            const input = getByTestId('input')
            await fireEvent.update(input, 'ครัวสมศรี')

            expect(input.closest("input").value).toEqual("ครัวสมศรี")
        })

        test('searchbar case 2', async () => {
            const {getByTestId} = render(Component)
        
            const input = getByTestId('input')
            await fireEvent.update(input, 'Restaurant')

            expect(input.closest("input").value).toEqual("Restaurant")
        })

        test('searchbar case 3', async () => {
            const {getByTestId} = render(Component)
        
            const input = getByTestId('input')
            await fireEvent.update(input, '-$%^&*()_+')

            expect(input.closest("input").value).toEqual("-$%^&*()_+")
        })

});
