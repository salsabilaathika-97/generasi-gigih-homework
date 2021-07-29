import React from "react";

class RowTable extends React.Component {
  render() {
    return <tr>
      <td>
        <img
          src={this.props.url}
          alt="GAMBAR ALBUM"
          style={{ height: "50px", width: "50px" }}
        />
      </td>
      <td>{this.props.artist_name}</td>
      <td>{this.props.album_name}</td>
      <td>{this.props.release_date}</td>
      <td>{this.props.total_tracks}</td>
    </tr>
    ;
  }
}

export default RowTable;
