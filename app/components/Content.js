import Cards from './Cards';
import Videos from './Videos';

export default () => {
    return `<div class="content">
                ${selectedTab === 'video' ? Videos() : Cards()}
            </div>`
}
