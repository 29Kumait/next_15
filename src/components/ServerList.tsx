import { fetchListData } from '../actions/actions';
import List from './List';
import { Data } from '../types/types';

const ServerList = async () => {
    const data: Data = await fetchListData();

    return <List data={data} />;
};

export default ServerList;
