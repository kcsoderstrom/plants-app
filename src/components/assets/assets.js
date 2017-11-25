import React from 'react';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import keys from 'lodash/keys';
import Table from '../general/table';

import './assets.css';

const S3_URL = 'https://s3.amazonaws.com';

const Tags = props => {
    const {
        tags,
        className
    } = props;

    const tagEls = reduce(tags, (arr, tag) => {
        if (tag) {
            arr.push(<div className="asset-tag">{tag}</div>)
        }

        return arr
    }, [])

    return (
        <div className={`asset-tags ${className || ''}`} >
            {tagEls}
        </div>
    )
}

const getAsset = props => {
    const {
        file_name,
        s3_bucket,
        tags,
        url
    } = props;
    
    const encodedFileName = encodeURI(file_name)
    var s3Url = null
    if(url) {
        s3Url = <a href={`//${url}`}>{url}</a>
    } else {
        const url = `${S3_URL}/${s3_bucket}/${encodedFileName}`;
        s3Url = <a href={url}>{url}</a>
    }
    return [
            <p >{file_name}</p>,
            s3Url,
            <Tags
                tags={tags}
            />
        ]
}

class Assets extends React.Component {
    render() {
        const { assets } = this.props;
        const isLength = keys(assets).length
        const headings = ['File name', 'Asset Url', 'Tags'];

        let isAssets = false;
        if (Array.isArray(assets)) {
            //TODO there is a wierd issue where media is getting an array with one item as [null]
            // when creating a project with no media. assets[0] is a temp fix.
            isAssets = assets && assets.length && assets[0]
        } else {
            isAssets = assets && !!Object.keys(assets).length;
        }

        const rows =  isAssets ? map(assets, asset => getAsset(asset)) : [];
        return (
            <Table
                className="assets"
                headings={headings}
                rows={rows}
            />
        )
    }
}

export default Assets;