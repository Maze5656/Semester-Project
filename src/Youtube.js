/**
 * Created by Josh on 7/25/2017.
 */
import React from 'react';

export default function YouTube(props){

    return (
        <div style={{position: "relative", height:0, paddingBottom:"56.25%"}}>
            <iframe
                title={`youtube_${props.videoId}`}
                src={`https://www.youtube.com/embed/${props.videoId}`}
                width={560}
                height={315}
                frameBorder={0}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0
                }}
                allowFullScreen
            />
        </div>
    );

}