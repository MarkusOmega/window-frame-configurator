import * as THREE from '/wp-content/plugins/houten-kozijn-configurator/js/threejs/src/Three.js';

// WIDTH

// onchange
export function change_width_outer_frame(frame_thickness, lf, object) {
    jQuery(".measurement-input[name='width']").on("change", function () {
        width_outer_frame(frame_thickness, lf, object);
    });
}
export function width_outer_frame(frame_thickness, lf, object) {
    var new_frame_width = parseInt(jQuery("input[name='width']").val());

    if (lf == "left") {
        object.position.x = -(new_frame_width / 2) + (frame_thickness / 2);
    }
    if (lf == "right") {
        object.position.x = (new_frame_width / 2) - (frame_thickness / 2);
    }
    object.position.z = 100;
}


// onchange
export function change_object_width(frame_thickness, outer_frame_thickness, in_out, geometry, object) {
    jQuery(".measurement-input[name='width']").on("change", function () {
        object_width(frame_thickness, outer_frame_thickness, in_out, geometry, object);
    });
}
export function object_width(frame_thickness, outer_frame_thickness, in_out, geometry, object) {
    var door_width = parseInt(jQuery("select[name='door-width']").val());

    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_depth = outer_frame_thickness;
    var new_height = frame_thickness;

    if (in_out == "door-single") {
        var new_height = 48 * 2;

        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            var new_frame_width = door_width - (48 * 3) + (frame_thickness / 2);
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            var new_frame_width = door_width - (48 * 3) + (frame_thickness / 2);
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            var new_frame_width = door_width - (48 * 3) + (frame_thickness / 2);
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            var new_frame_width = new_frame_width - (frame_thickness * 4) - (48 * 2);
        }
    }


    if (in_out == "inner") {
        var new_frame_width = new_frame_width - (frame_thickness * 2);

        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                var new_frame_width = door_width + (frame_thickness * 1.5);
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                var new_frame_width = door_width * 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                var new_frame_width = door_width + (frame_thickness * 1.5);
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                var new_frame_width = door_width * 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                var new_frame_width = door_width;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                var new_frame_width = door_width * 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            var new_frame_width = new_frame_width;
        }
    }
    if (in_out == "outer") {
        var new_frame_width = parseInt(jQuery("input[name='width']").val());
    }

    if (in_out == "inner-top") {
        var new_frame_width = new_frame_width - (frame_thickness * 3);
        var new_depth = frame_thickness;
    }

    geometry.dispose();
    object.geometry = new THREE.BoxGeometry(new_frame_width, new_height, new_depth);
}

// HEIGHT
export function change_height_outer_frame(frame_thickness, lf, object) {
    jQuery(".measurement-input[name='height']").on("change", function () {
        height_outer_frame(frame_thickness, lf, object);
    });
}

export function height_outer_frame(frame_thickness, lf, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());

    if (lf == "top") {
        object.position.y = (new_frame_height / 2) - (frame_thickness * 1.5);
    }
    if (lf == "bot") {
        object.position.y = -(new_frame_height / 2) + (frame_thickness * 1.5);
    }

    object.position.z = 100;
}


export function change_object_height(frame_thickness, outer_frame_thickness, in_out, geometry, object) {
    jQuery(".measurement-input[name='height'], select#door-height").on("change", function () {
        object_height(frame_thickness, outer_frame_thickness, in_out, geometry, object)
    });
}

export function object_height(frame_thickness, outer_frame_thickness, in_out, geometry, object) {
    var new_frame_width = frame_thickness;
    var frame_thickness_thick = 48;
    var new_frame_depth = frame_thickness;
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var door_height = jQuery("select#door-height").val();

    if (in_out == "inner") {
        var new_frame_height = new_frame_height - (frame_thickness * 4);
        var new_frame_depth = 114;
    }

    if (in_out == "outer") {
        var new_frame_height = new_frame_height;
        var new_frame_depth = 114;
    }

    if (in_out == "door") {
        if (jQuery("input#sq-toplight").val() == "bovenlicht") {
            var new_frame_height = parseInt(jQuery("input[name='door-height']").val());
        } else {
            var new_frame_height = new_frame_height - (frame_thickness * 2);
        }
        var new_frame_width = frame_thickness_thick * 2;
    }

    if (in_out == "inner-top") {
        var new_frame_height = new_frame_height - (frame_thickness * 4) - door_height;
    }

    if (in_out == "inner-left-right") {
        var new_frame_height = new_frame_height - (frame_thickness * 4);
        var new_frame_depth = 114;
        var new_frame_width = frame_thickness;
    }

    geometry.dispose();

    object.geometry = new THREE.BoxGeometry(new_frame_width, new_frame_height, new_frame_depth);
}


export function change_height_inner_frame(frame_thickness, object) {
    jQuery(".measurement-input[name='height']").on("change", function () {
        height_inner_frame(frame_thickness, object)
    });
}
export function height_inner_frame(frame_thickness, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());

    object.position.y = -(new_frame_height / 2) + frame_thickness + door_height;
    object.position.z = 100;
}

// INNER FRAME
export function change_inner_frame_position(frame_thickness, left_right, object) {
    jQuery(".measurement-input[name='width'], .measurement-input[name='height'], select[name='door-height']").on("change", function () {
        inner_frame_position(frame_thickness, left_right, object);
    });
}

export function inner_frame_position(frame_thickness, left_right, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var door_width = parseInt(jQuery("select#door-width").val());
    var door_height = parseInt(jQuery("select#door-height").val());

    // DOORS
    if (jQuery("input#sq-door-type").val() != "geen") {

        if (jQuery("input#sq-door-type").val() == "enkel") {
            if (left_right == "left") {
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                    object.position.y = -(new_frame_height / 2) + frame_thickness + (door_height / 2);
                } else {
                    object.position.y = 0;
                }

                object.position.x = -(new_frame_width / 2) + (frame_thickness * 1.5);


            }
            if (left_right == "right") {
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                    object.position.y = -(new_frame_height / 2) + frame_thickness + (door_height / 2);
                } else {
                    object.position.y = 0;
                }
                object.position.x = +(new_frame_width / 2) - (frame_thickness * 1.5);
            }
            if (left_right == "left-right") {
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                    object.position.y = -(new_frame_height / 2) + frame_thickness + (door_height / 2);
                } else {
                    object.position.y = 0;
                }
                object.position.x = -(new_frame_width / 2) + frame_thickness + door_width;
            }

            if (left_right == "right-left") {
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                    object.position.y = -(new_frame_height / 2) + frame_thickness + (door_height / 2);
                } else {
                    object.position.y = 0;
                }
                object.position.x = +(new_frame_width / 2) - frame_thickness - door_width;
            }
            if (left_right == "left-inner") {
                object.position.x = +(new_frame_width / 2) - (frame_thickness * 2) - door_width - 48;
            }
            if (left_right == "right-inner") {
                object.position.x = -(new_frame_width / 2) + (frame_thickness * 2) + door_width + 48;
            }

            if (left_right == "top") {
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {

                    object.position.y = -(new_frame_height / 2) + door_height;
                } else {

                    object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5) - 37;
                }
            }
            if (left_right == "top-door-right") {
                object.position.x = +(new_frame_width / 2) - 48 - (frame_thickness / 4) - (door_width / 2);
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                    object.position.y = -(new_frame_height / 2) + door_height;
                } else {
                    object.position.y = +(new_frame_height / 2) - (frame_thickness * 2);
                }

            }
            if (left_right == "top-door-left") {
                object.position.x = -(new_frame_width / 2) + 48 + (frame_thickness / 4) + (door_width / 2);
                if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                    object.position.y = -(new_frame_height / 2) + door_height;
                } else {
                    object.position.y = +(new_frame_height / 2) - (frame_thickness * 2);
                }

            }

            // TOPLIGHT
            if (left_right == "top-left") {
                var toplight_height = new_frame_height - frame_thickness - door_height;
                object.position.y = +(new_frame_height / 2) - (frame_thickness / 2) - (toplight_height / 2);
                object.position.x = -(new_frame_width / 2) + (frame_thickness);
            }
            if (left_right == "top-right") {
                var toplight_height = new_frame_height - frame_thickness - door_height;
                object.position.y = +(new_frame_height / 2) - (frame_thickness / 2) - (toplight_height / 2);
                object.position.x = +(new_frame_width / 2) - (frame_thickness);
            }
            if (left_right == "top-top") {
                object.position.y = +(new_frame_height / 2) - (parseInt(frame_thickness * 1.5));
            }
            if (left_right == "top-bot") {
                var toplight_height = new_frame_height - frame_thickness - door_height;
                object.position.y = +(new_frame_height / 2) - (frame_thickness / 2) - (toplight_height) + (frame_thickness * 1.5);

            }
            object.position.z = 100;
        }

        if (jQuery("input#sq-door-type").val() == "dubbel") {
            if (left_right == "left") {
                object.position.x = +new_frame_width / 2 - frame_thickness - door_width * 2;
            }
            if (left_right == "right") {
                object.position.x = -new_frame_width / 2 + frame_thickness + door_width * 2;
            }
            if (left_right == "left-right") {
                object.position.x = -door_width - (frame_thickness / 2);
            }
            if (left_right == "right-left") {
                object.position.x = +door_width + (frame_thickness / 2);
            }
        }
    }

    // WINDOWS
    if (jQuery("input#sq-door-type").val() == "geen") {
        if (left_right == "left") {
            //object.position.x = - (door_width/2) - (frame_thickness/2);
        }
        if (left_right == "right") {
            //object.position.x = + (door_width/2) + (frame_thickness/2);
        }
    }
}

export function change_inner_frame_top_position(frame_thickness, object) {
    jQuery(".measurement-input[name='width'], .measurement-input[name='height'], select[name='door-height']").on("change", function () {
        inner_frame_top_position(frame_thickness, object);
    });
}

export function inner_frame_top_position(frame_thickness, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var door_width = parseInt(jQuery("select#door-width").val());
    var door_height = parseInt(jQuery("select#door-height").val());

    // DOORS
    if (jQuery("input#sq-door-type").val() != "geen") {
        if (jQuery("input#sq-toplight").val() == "bovenlicht") {

            if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
                if (jQuery("input#sq-door-type").val() == "enkel") {
                    object.position.x = +new_frame_width / 2 - (frame_thickness * 2) - door_width / 2;
                }
                if (jQuery("input#sq-door-type").val() == "dubbel") {

                    object.position.x = +new_frame_width / 2 - frame_thickness - door_width;
                }
            }
            if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
                if (jQuery("input#sq-door-type").val() == "enkel") {
                    object.position.x = -new_frame_width / 2 + (frame_thickness * 2) + door_width / 2;
                }
                if (jQuery("input#sq-door-type").val() == "dubbel") {
                    object.position.x = -new_frame_width / 2 + frame_thickness + door_width;
                }
            }
            if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
                object.position.x = 0;
            }

            if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
                object.position.x = 0;

            }
            object.position.y = -(new_frame_height / 2) + frame_thickness * 2 + door_height;
            object.position.z = 100;
        }
    }

    // WINDOWS
    if (jQuery("input#sq-door-type").val() == "geen") {
        if (left_right == "left") {
            //object.position.x = - (door_width/2) - (frame_thickness/2);
        }
        if (left_right == "right") {
            //object.position.x = + (door_width/2) + (frame_thickness/2);
        }
    }
}


// HEIGHT TOPLIGHT OBJECTS

export function change_object_height_toplight(frame_thickness, outer_frame_thickness, geometry, object) {
    jQuery(".measurement-input[name='height']").on("change", function () {
        object_height_toplight(frame_thickness, outer_frame_thickness, geometry, object);
    });
}

export function object_height_toplight(frame_thickness, outer_frame_thickness, geometry, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var toplight_height = new_frame_height - door_height - (frame_thickness * 2.5);

    geometry.dispose();
    object.geometry = new THREE.BoxGeometry(frame_thickness, toplight_height, outer_frame_thickness);

}


export function change_height_vert_toplight(frame_thickness, object) {
    jQuery(".measurement-input[name='height']").on("change", function () {
        height_vert_toplight(frame_thickness, object);
    });
}

export function height_vert_toplight(frame_thickness, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var toplight_height = new_frame_height - door_height - (frame_thickness * 2);

    object.position.y = -(new_frame_height / 2) + (frame_thickness / 2) + frame_thickness / 1.5 + door_height + toplight_height / 2;
    object.position.z = 100;
}



// DOORS SIZE
export function change_door_object_height_width(frame_thickness, hv, geometry, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width'] ").on("change", function () {
        door_object_height_width(frame_thickness, hv, geometry, object);
    });
}
export function door_object_height_width(frame_thickness, hv, geometry, object) {
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_frame_height = parseInt(jQuery("input[name='height']").val());

    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());

    var frame_thickness_thick = 48;
    var door_top_width = new_frame_width - frame_thickness * 2 - frame_thickness_thick * 8;

    geometry.dispose();

    if (hv == "horz") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {

        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {

        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.geometry = new THREE.BoxGeometry(door_width - frame_thickness_thick * 4, frame_thickness_thick * 2, frame_thickness);
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.geometry = new THREE.BoxGeometry(new_frame_width - frame_thickness - frame_thickness_thick * 4, frame_thickness_thick * 2, frame_thickness);
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.geometry = new THREE.BoxGeometry((new_frame_width / 2) - frame_thickness - frame_thickness_thick * 4, frame_thickness_thick * 2, frame_thickness);
            }
        }
    }
    if (hv == "vert") {
        if (jQuery("input#sq-toplight").val() == "no-toplight") {
            object.geometry = new THREE.BoxGeometry(frame_thickness_thick * 2, new_frame_height - (frame_thickness * 2), frame_thickness);
        }
        if (jQuery("input#sq-toplight").val() == "bovenlicht") {
            object.geometry = new THREE.BoxGeometry(frame_thickness_thick * 2, door_height, frame_thickness);
        }
    }
}



export function change_door_full_object_height_width(frame_thickness, geometry, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width'] ").on("change", function () {
        door_full_object_height_width(frame_thickness, geometry, object);
    });
}
export function door_full_object_height_width(frame_thickness, geometry, object) {
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_frame_height = parseInt(jQuery("input[name='height']").val());

    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());

    var frame_thickness_thick = 48;
    var door_top_width = new_frame_width - frame_thickness * 2 - frame_thickness_thick * 8;

    geometry.dispose();

    // LEFT SIDELIGHT
    if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
        object.geometry = new THREE.BoxGeometry(door_width, door_height, frame_thickness);
    }

    // RIGHT SIDELIGHT
    if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
        object.geometry = new THREE.BoxGeometry(door_width, door_height, frame_thickness);
    }

    // BOTH SIDELIGHTS
    if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
        object.geometry = new THREE.BoxGeometry(door_width, door_height, frame_thickness);
    }


    // NO SIDELIGHT
    if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {

        if (jQuery("input#sq-toplight").val() == "bovenlicht") {
            door_height = parseInt(jQuery("select[name='door-height']").val());
        } else {
            door_height = new_frame_height - frame_thickness * 3;
        }

        if (jQuery("input#sq-door-type").val() == "enkel") {
            object.geometry = new THREE.BoxGeometry(new_frame_width - frame_thickness, door_height, frame_thickness);
        }
        if (jQuery("input#sq-door-type").val() == "dubbel") {
            object.geometry = new THREE.BoxGeometry((new_frame_width / 2) - frame_thickness, door_height, frame_thickness);
        }
    }


}


// DOORS POSITIONS
/* POS can be left-left, left-right, right-left, right-right, door-top-left, door-top-right, door-bot-left, door-bot-right*/
export function change_door_object_position(frame_thickness, pos, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width'] ").on("change", function () {
        door_object_position(frame_thickness, pos, object);
    });
}
export function door_object_position(frame_thickness, pos, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());
    var frame_thickness_thick = parseInt(48);
    var inner_width = new_frame_width - (frame_thickness * 2)

    object.position.z = 100;
    if (jQuery("input#sq-toplight").val() == "no-toplight") {
        object.position.y = 0;
    }
    if (jQuery("input#sq-toplight").val() == "bovenlicht") {
        object.position.y = -(new_frame_height / 2) + (frame_thickness / 2) + (door_height / 2);
    }

    if (pos == "left-left") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = +new_frame_width / 2 - door_width + frame_thickness_thick / 2;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = +new_frame_width / 2 - door_width * 2 + frame_thickness_thick / 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = -new_frame_width / 2 + frame_thickness_thick + frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = -new_frame_width / 2 + frame_thickness_thick + frame_thickness;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -(door_width) + frame_thickness_thick;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + (frame_thickness * 2) + (frame_thickness_thick / 4);
        }
    }
    if (pos == "left-right") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = +new_frame_width / 2 - frame_thickness_thick - frame_thickness / 2 - door_width / 2;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = +new_frame_width / 2 - frame_thickness_thick - frame_thickness / 2 - door_width;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = -new_frame_width / 2 - frame_thickness_thick - frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = -new_frame_width / 2 + door_width;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -frame_thickness_thick;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = -frame_thickness_thick;
        }
    }
    if (pos == "right-left") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = +new_frame_width / 2 - door_width / 2 + frame_thickness / 2;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = +new_frame_width / 2 - door_width + frame_thickness / 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = -new_frame_width / 2 - frame_thickness_thick - frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = -new_frame_width / 2 + frame_thickness_thick + frame_thickness + door_width;

            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = +frame_thickness_thick;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +frame_thickness_thick;
        }

    }
    if (pos == "right-right") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = +new_frame_width / 2 - frame_thickness_thick - frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = +new_frame_width / 2 - frame_thickness_thick - frame_thickness;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = -new_frame_width / 2 - frame_thickness_thick / 2 + door_width;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = -new_frame_width / 2 - frame_thickness_thick / 2 + door_width * 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = +door_width - frame_thickness_thick;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +(new_frame_width / 2) - (frame_thickness * 2) - (frame_thickness_thick / 4);
        }
    }


    if (pos == "door-top-left" || pos == "door-top-right") {
        if (jQuery("input#sq-toplight").val() == "no-toplight") {
            object.position.y = (new_frame_height / 2) - (frame_thickness / 2) - frame_thickness_thick;
        }
        if (jQuery("input#sq-toplight").val() == "bovenlicht") {
            object.position.y = -(new_frame_height / 2) + (frame_thickness / 2) + door_height - frame_thickness_thick;
        }
    }
    if (pos == "door-top-left") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {

        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {

        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -door_width / 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = -inner_width / 4;
        }
    }
    if (pos == "door-top-right") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {

        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {

        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = +door_width / 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +inner_width / 4;
        }
    }
}

export function change_door_full_object_position(frame_thickness, pos, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width'] ").on("change", function () {
        door_full_object_position(frame_thickness, pos, object);
    });
}
export function door_full_object_position(frame_thickness, pos, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());
    var frame_thickness_thick = parseInt(48);
    var inner_width = new_frame_width - (frame_thickness * 2)

    object.position.z = 100;
    if (jQuery("input#sq-toplight").val() == "no-toplight") {
        object.position.y = 0;
    }
    if (jQuery("input#sq-toplight").val() == "bovenlicht") {
        object.position.y = -(new_frame_height / 2) + (frame_thickness / 2) + (door_height / 2);
    }

    if (pos == "left") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = +new_frame_width / 2 - door_width + frame_thickness_thick / 2;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = +new_frame_width / 2 - door_width / 2 - door_width - frame_thickness;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = -new_frame_width / 2 + frame_thickness_thick + frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = -new_frame_width / 2 + frame_thickness + door_width / 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -door_width / 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = -door_width / 2 + frame_thickness;
        }
    }
    if (pos == "right") {
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = +new_frame_width / 2 - door_width + frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = new_frame_width / 2 - door_width / 2 - frame_thickness;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            if (jQuery("input#sq-door-type").val() == "enkel") {
                object.position.x = -new_frame_width / 2 - frame_thickness_thick - frame_thickness;
            }
            if (jQuery("input#sq-door-type").val() == "dubbel") {
                object.position.x = -new_frame_width / 2 + frame_thickness + door_width * 2 - door_width / 2;
            }
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = +door_width / 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +door_width / 2 - frame_thickness;
        }
    }
}


// STACKING SILLS
export function change_stacking_sill_position(frame_thickness, frame_thickness_thick, pos, count, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width']").on("change", function () {
        stacking_sill_object_position(frame_thickness, frame_thickness_thick, pos, count, object);
    });
}

export function stacking_sill_object_position(frame_thickness, frame_thickness_thick, pos, count, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());

    if (pos == "door-left") {
        object.position.y = -new_frame_height / 2 + 40 + frame_thickness + (110 * count);
        object.rotation.y = -Math.PI / 2;
        object.position.z = 70;
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +(new_frame_width / 2) - (48 * 2) - (frame_thickness / 2);
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + (frame_thickness / 2) + door_width;
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -frame_thickness_thick * 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +new_frame_width / 2 - frame_thickness / 2 - (48 * 2);
        }
    }
    if (pos == "door-right") {
        object.rotation.y = +Math.PI / 2;
        object.position.y = -new_frame_height / 2 + 40 + (110 * count);
        object.position.z = 0;

        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +new_frame_width / 2 - door_width + frame_thickness_thick + frame_thickness / 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -new_frame_width / 2 + door_width + frame_thickness_thick * 2 + frame_thickness;
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = +frame_thickness_thick * 2;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +frame_thickness_thick * 2;
        }
    }

    if (pos == "zijlicht-links") {
        object.position.x = -(new_frame_width / 2) + (frame_thickness * 2) + (frame_thickness_thick / 4);
    }
    if (pos == "zijlicht-rechts") {
        object.position.x = -(new_frame_width / 2) + (frame_thickness * 2) + (frame_thickness_thick / 4);
    }
}

export function change_stacking_sill_object_size(frame_thickness, geometry, object) {
    jQuery(".measurement-input[name='width']").on("change", function () {
        stacking_sill_object_size(frame_thickness, geometry, object);
    });
}
export function stacking_sill_object_size(frame_thickness, geometry, object) {
    var frame_thickness_thick = 48;

    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());


    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var door_top_width = new_frame_width - frame_thickness * 2 - frame_thickness_thick * 8;

    var stacking_sill_shape = new THREE.Shape();
    stacking_sill_shape.moveTo(0 + 0, 0 + 5);
    stacking_sill_shape.lineTo(0, 105);
    stacking_sill_shape.lineTo(5, 110);
    stacking_sill_shape.lineTo(32, 110);
    stacking_sill_shape.lineTo(37, 105);
    stacking_sill_shape.lineTo(37, 5);
    stacking_sill_shape.lineTo(32, 0);
    stacking_sill_shape.lineTo(5, 0);
    stacking_sill_shape.lineTo(0, 5);

    geometry.dispose();

    if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
        var extrude_lenght = door_width - (frame_thickness_thick * 2);
    }
    if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
        var extrude_lenght = door_width - (frame_thickness_thick * 2);
    }
    if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
        var extrude_lenght = door_width - (frame_thickness_thick * 2);
    }
    if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
        var door_width = jQuery(".measurement-input[name='width']").val();

        var extrude_lenght = door_width - (frame_thickness) - (48 * 4);
    }


    var extrudeSettings1 = {
        depth: extrude_lenght,
        bevelEnabled: false
    };
    object.geometry = new THREE.ExtrudeGeometry(stacking_sill_shape, extrudeSettings1);
}



// GLASS
export function change_height_width_glass(frame_thickness, outer_frame_thickness, geometry, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width']").on("change", function () {
        glass_object_size(frame_thickness, outer_frame_thickness, geometry, object);
    });
}

export function glass_object_size(frame_thickness, outer_frame_thickness, geometry, object) {
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_frame_height = parseInt(jQuery("input[name='height']").val());

    geometry.dispose();

    object.geometry = new THREE.BoxGeometry(new_frame_width - (frame_thickness * 2), new_frame_height - (frame_thickness * 2), outer_frame_thickness);
}



// HINGES
export function change_hinge_position(frame_thickness, left_right, object_nr, geometry, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width']").on("change", function () {
        hinge_position(frame_thickness, left_right, object_nr, geometry, object);
    });
}

export function hinge_position(frame_thickness, left_right, object_nr, geometry, object) {
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var door_width = parseInt(jQuery("select[name='door-width']").val());

    if (jQuery("input#sq-sidelights").val() == "no-sidelights" && jQuery("input#sq-toplight").val() == "no-toplight") {
        var door_height = new_frame_height;
    }

    if (left_right == "left") {
        object.position.x = -(new_frame_width / 2) + frame_thickness + 10;

        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = +(new_frame_width / 2) - (48 * 2) - door_width;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + frame_thickness + 10;
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + frame_thickness + 10;
        }
    }
    if (left_right == "right") {
        object.position.x = +(new_frame_width / 2) - frame_thickness - 10;

        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() != "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + frame_thickness + 10;
        }
        if (jQuery("input#sq-sidelights-left").val() != "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + frame_thickness + 10;
        }
        if (jQuery("input#sq-sidelights-left").val() == "zijlicht-links" && jQuery("input#sq-sidelights-right").val() == "zijlicht-rechts") {
            object.position.x = -(new_frame_width / 2) + frame_thickness + 10;
        }
    }

    if (object_nr == 1) {
        object.position.y = -(new_frame_height / 2) + frame_thickness + 100;
    }
    if (object_nr == 2) {
        object.position.y = -(new_frame_height / 2) + (door_height / 2);
    }
    if (object_nr == 3) {
        object.position.y = -(new_frame_height / 2) + door_height - 300;
    }
    if (object_nr == 4) {
        object.position.y = -(new_frame_height / 2) + door_height - 100;
    }





    object.position.z = 120;
}


// VENTS
export function change_vent_position(frame_thickness, vent_pos, geometry, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width']").on("change", function () {
        vent_position(frame_thickness, vent_pos, geometry, object);
    });
}

export function vent_position(frame_thickness, vent_pos, geometry, object) {

    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var frame_thickness_thick = parseInt(48);

    if (jQuery("input#sq-toplight").val() == "no-toplight") {
        door_height = new_frame_height;
    }

    switch (vent_pos) {
        case "bovenlicht":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            break;
        case "toplight-left":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            object.position.x = -(new_frame_width / 4) + (frame_thickness / 3.5);
            break;
        case "toplight-right":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            object.position.x = +(new_frame_width / 4) - (frame_thickness / 3.5);
            break;
        case "side-left-top":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            break;
        case "side-right-top":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            break;
        case "zijlicht-links":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            break;
        case "zijlicht-rechts":
            object.position.y = +(new_frame_height / 2) - (frame_thickness * 1.5);
            break;
        case "door-left":
            object.position.y = -(new_frame_height / 2) + door_height - (frame_thickness_thick * 2);
            object.position.x = -(new_frame_width / 4) + (frame_thickness / 2);
            break;
        case "door-right":
            object.position.y = -(new_frame_height / 2) + door_height - (frame_thickness_thick * 2);
            object.position.x = +(new_frame_width / 4) - (frame_thickness / 2);
            break;
            break;
        case "door":
            object.position.y = -(new_frame_height / 2) + door_height - (frame_thickness * 2) - (frame_thickness_thick * 2);
            break;

    }
    object.position.z = 100;
}


export function change_vent_object_size(frame_thickness, vent_pos, geometry, object) {
    jQuery(".measurement-input[name='width']").on("change", function () {
        vent_object_size(frame_thickness, vent_pos, geometry, object);
    });
}

export function vent_object_size(frame_thickness, vent_pos, geometry, object) {
    var door_height = parseInt(jQuery("select[name='door-height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var frame_thickness_thick = 48;

    var door_top_width = new_frame_width - frame_thickness * 2 - frame_thickness_thick * 3;

    geometry.dispose();

    switch (vent_pos) {
        case "bovenlicht":
            object.geometry = new THREE.BoxGeometry(new_frame_width - (frame_thickness), 35, 20);
            break;
        case "toplight-left":
            object.geometry = new THREE.BoxGeometry((new_frame_width / 2) - (frame_thickness), 35, 20);
            break;
        case "toplight-right":
            object.geometry = new THREE.BoxGeometry((new_frame_width / 2) - (frame_thickness), 35, 20);
            break;
        case "side-left-top":

            break;
        case "side-right-top":

            break;
        case "zijlicht-links":

            break;
        case "zijlicht-rechts":

            break;
        case "door-left":
            object.geometry = new THREE.BoxGeometry(door_top_width / 2, 35, 20);

            break;
        case "door-right":
            object.geometry = new THREE.BoxGeometry(door_top_width / 2, 35, 20);
            break;
            break;
        case "door":
            object.geometry = new THREE.BoxGeometry(door_top_width, 35, 20);
            break;
    }
}

export function change_handle_object_position(frame_thickness, handle_pos, handle_yes_no, type, in_out, object) {
    jQuery(".measurement-input[name='height'], .measurement-input[name='width']").on("change", function () {
        handle_object_position(frame_thickness, handle_pos, handle_yes_no, type, in_out, object);
    });

}

export function handle_object_position(frame_thickness, handle_pos, handle_yes_no, type, in_out, object) {
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var frame_thickness_thick = 48;
    var door_height = parseInt(jQuery("select[name='door-height']").val());

    var fitting_side = "right";
    if (jQuery("input#door-hinge-side-left").is(":checked")) {
        var fitting_side = "right";
        var handle_pos = "door-single-left";
    }
    if (jQuery("input#door-hinge-side-right").is(":checked")) {
        var fitting_side = "left";
        var handle_pos = "door-single-right";
    }

    object.position.y = -new_frame_height / 2 + 1000;

    if (in_out == "in") {

    }
    if (in_out == "out") {
        if (type == "plate") {
            object.position.z = 115;
        }
        if (type == "pivot") {
            object.position.z = 140;
        }
        if (type == "handle") {
            object.position.z = 160;
        }
        if (type == "round") {
            object.position.z = 160;
        }
    }

    switch (handle_pos) {
        case "door-single-left":
            if (type == "plate") {
                if (fitting_side == "right") {
                    object.position.x = +new_frame_width / 2 - frame_thickness_thick - 20;
                }

            }
            if (type == "pivot") {
                if (fitting_side == "right") {
                    object.position.x = +new_frame_width / 2 - frame_thickness_thick - 20;
                }

            }
            if (type == "handle") {
                if (fitting_side == "right") {
                    object.position.x = +new_frame_width / 2 - frame_thickness_thick - 60;
                }

            }
            if (type == "round") {
                if (fitting_side == "right") {
                    object.position.x = +new_frame_width / 2 - frame_thickness_thick - 20;
                }

            }

            break;
        case "door-single-right":
            if (type == "plate") {

                if (fitting_side == "left") {
                    object.position.x = -new_frame_width / 2 + frame_thickness_thick + 20;
                }
            }
            if (type == "pivot") {

                if (fitting_side == "left") {
                    object.position.x = -new_frame_width / 2 + frame_thickness_thick + 20;
                }
            }
            if (type == "handle") {

                if (fitting_side == "left") {
                    object.position.x = -new_frame_width / 2 + frame_thickness_thick + 60;
                }
            }
            if (type == "round") {

                if (fitting_side == "left") {
                    object.position.x = -new_frame_width / 2 + frame_thickness_thick + 20;
                }
            }
            break;
        case "door-double-left":
            object.position.x = -frame_thickness_thick;

            if (handle_yes_no == "yes") {
                object.position.x = -frame_thickness_thick - 40;
            }
            break;
        case "door-double-right":
            object.position.x = +frame_thickness_thick;

            if (handle_yes_no == "yes") {
                object.position.x = +frame_thickness_thick + 40;
            }
            break;
    }
}


// RODS
export function change_rod_object_size(frame_thickness, rod_pos, rod_type, geometry, object) {
    jQuery(".measurement-input[name='width'], .measurement-input[name='height'] ").on("change", function () {
        rod_object_size(frame_thickness, rod_pos, rod_type, geometry, object);
    });
}

export function rod_object_size(frame_thickness, rod_pos, rod_type, geometry, object) {
    var new_frame_height = parseInt(jQuery("input[name='height']").val());
    var new_frame_width = parseInt(jQuery("input[name='width']").val());
    var frame_thickness_thick = 48;

    var door_height = jQuery("select#door-height").val();


    var door_top_width = new_frame_width - frame_thickness * 2 - frame_thickness_thick * 3;

    var toplight_height = new_frame_height - frame_thickness - door_height;

    if (jQuery("input#sq-toplight").val() == "no-toplight") {
        var door_height = new_frame_height - frame_thickness * 2;
    }
    if (jQuery("input#sq-toplight").val() == "bovenlicht") {
        var door_height = parseInt(jQuery("select[name='door-height']").val());
    }

    geometry.dispose();

    switch (rod_type) {
        case "v_front":
            object.geometry = new THREE.BoxGeometry(5, door_height, 6);
            break;
        case "v_mid":
            object.geometry = new THREE.BoxGeometry(5, door_height, 6);
            break;
        case "v_back":
            object.geometry = new THREE.BoxGeometry(5, door_height, 6);
            break;

        case "v_top_front":
            object.geometry = new THREE.BoxGeometry(5, toplight_height, 6);
            break;
        case "v_top_mid":
            object.geometry = new THREE.BoxGeometry(5, toplight_height, 6);
            break;
        case "v_top_back":
            object.geometry = new THREE.BoxGeometry(5, toplight_height, 6);
            break;

        case "h_top_front":
            object.geometry = new THREE.BoxGeometry(door_top_width, 5, 6);
            break;
        case "h_mid":
            object.geometry = new THREE.BoxGeometry(door_top_width, 5, 5);

            break;
        case "h_back":
            object.geometry = new THREE.BoxGeometry(door_top_width, 5, 6);
            break;
    }
}


export function change_rod_object_position(frame_thickness, rod_pos, rod_type, geometry, object, rod_count) {
    jQuery(".measurement-input[name='width'], .measurement-input[name='height'], select#vert-rods, select#horz-rods, select#door-stacking-sill, select#door-height ").on("change", function () {
        rod_object_position(frame_thickness, rod_pos, rod_type, geometry, object, rod_count);
    });
}

export function rod_object_position(frame_thickness, rod_pos, rod_type, geometry, object, rod_count) {
    var door_height = jQuery("select#door-height").val();
    var door_width = jQuery("select#door-width").val();

    var frame_height = jQuery(".measurement-input[name='height']").val();
    var frame_width = jQuery(".measurement-input[name='width']").val();

    var vert_rod_count = jQuery("select#vert-rods").val();
    var horz_rod_count = jQuery("select#horz-rods").val();
    var number_of_sills_doors = jQuery("select[name='door-stacking-sill']").val();
    var sill_height = 110;
    var frame_thickness_thick = 48;

    var toplight_height = frame_height - frame_thickness - door_height;

    if (jQuery("input#sq-toplight").val() == "bovenlicht") {
        var window_height = frame_height - frame_thickness * 3 - (48 * 2) - (110 * number_of_sills_doors) - toplight_height;
    } else {
        var window_height = frame_height - frame_thickness * 3 - (48 * 2) - (110 * number_of_sills_doors);
    }


    var door_width = frame_width - frame_thickness * 2 - frame_thickness_thick * 3;
    var door_width = door_width / 2;


    switch (rod_type) {
        case "v_front":
            object.position.z = 100;

            if (vert_rod_count == 1) {
                object.position.x = 0;
            }
            if (vert_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.x = -(door_width / 3);
                }
                if (rod_count == 2) {
                    object.position.x = +(door_width / 3);
                }
            }

            if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                object.position.y = -(frame_height / 2) + frame_thickness + (door_height / 2);
            } else {
                object.position.y = 0;
            }
            break;
        case "v_mid":
            object.position.z = 95;

            if (vert_rod_count == 1) {
                object.position.x = "";
            }
            if (vert_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.x = -(door_width / 3);
                }
                if (rod_count == 2) {
                    object.position.x = +(door_width / 3);
                }
            }
            if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                object.position.y = -(frame_height / 2) + frame_thickness + (door_height / 2);
            } else {
                object.position.y = 0;
            }
            break;
        case "v_back":
            object.position.z = 90;

            if (vert_rod_count == 1) {
                object.position.x = "";
            }
            if (vert_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.x = -(door_width / 3);
                }
                if (rod_count == 2) {
                    object.position.x = +(door_width / 3);
                }
            }
            if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                object.position.y = -(frame_height / 2) + frame_thickness + (door_height / 2);
            } else {
                object.position.y = 0;
            }
            break;

        case "v_top_front":
            object.position.z = 100;

            if (vert_rod_count == 1) {
                object.position.x = 0;
            }
            if (vert_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.x = -(door_width / 3);
                }
                if (rod_count == 2) {
                    object.position.x = +(door_width / 3);
                }
            }

            if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                object.position.y = -(frame_height / 2) + frame_thickness + door_height + (toplight_height / 2);
            } else {
                object.position.y = 0;
            }
            break;
        case "v_top_mid":
            object.position.z = 95;

            if (vert_rod_count == 1) {
                object.position.x = "";
            }
            if (vert_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.x = -(door_width / 3);
                }
                if (rod_count == 2) {
                    object.position.x = +(door_width / 3);
                }
            }
            if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                object.position.y = -(frame_height / 2) + frame_thickness + door_height + (toplight_height / 2);
            } else {
                object.position.y = 0;
            }
            break;
        case "v_top_back":
            object.position.z = 90;

            if (vert_rod_count == 1) {
                object.position.x = "";
            }
            if (vert_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.x = -(door_width / 3);
                }
                if (rod_count == 2) {
                    object.position.x = +(door_width / 3);
                }
            }
            if (jQuery("input#sq-toplight").val() == "bovenlicht") {
                object.position.y = -(frame_height / 2) + frame_thickness + door_height + (toplight_height / 2);
            } else {
                object.position.y = 0;
            }
            break;

        case "h_front":
            object.position.z = 100;

            if (horz_rod_count == 1) {
                object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + window_height / 2;
            }
            if (horz_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 3);
                }
                if (rod_count == 2) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 3) + (window_height / 3);
                }
            }
            if (horz_rod_count == 3) {
                if (rod_count == 1) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4);
                }
                if (rod_count == 2) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4) + (window_height / 4);
                }
                if (rod_count == 3) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4) + (window_height / 4) + (window_height / 4);
                }
            }

            break;
        case "h_mid":
            object.position.z = 95;

            if (horz_rod_count == 1) {
                object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + window_height / 2;
            }
            if (horz_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 3);
                }
                if (rod_count == 2) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 3) + (window_height / 3);
                }
            }
            if (horz_rod_count == 3) {
                if (rod_count == 1) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4);
                }
                if (rod_count == 2) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4) + (window_height / 4);
                }
                if (rod_count == 3) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4) + (window_height / 4) + (window_height / 4);
                }
            }

            break;
        case "h_back":
            object.position.z = 90;

            if (horz_rod_count == 1) {
                object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + window_height / 2;
            }
            if (horz_rod_count == 2) {
                if (rod_count == 1) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 3);
                }
                if (rod_count == 2) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 3) + (window_height / 3);
                }
            }
            if (horz_rod_count == 3) {
                if (rod_count == 1) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4);
                }
                if (rod_count == 2) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4) + (window_height / 4);
                }
                if (rod_count == 3) {
                    object.position.y = -(frame_height / 2) + frame_thickness * 2 + (110 * number_of_sills_doors) + (window_height / 4) + (window_height / 4) + (window_height / 4);
                }
            }
            break;
    }
}



// DOOR GROOVES

export function change_groove_object_size(frame_thickness, geometry, object) {
    jQuery(".measurement-input[name='width'], .measurement-input[name='height'] ").on("change", function () {
        groove_object_size(frame_thickness, geometry, object);
    });
}

export function groove_object_size(frame_thickness, geometry, object) {
    var new_frame_height = jQuery(".measurement-input[name='height']").val();
    var new_frame_width = jQuery(".measurement-input[name='width']").val();

    var new_frame_width = new_frame_width - (frame_thickness * 2);

    var calc_frame_width = Math.floor(new_frame_width / 110);


    var new_groove_width_outer = new_frame_width / calc_frame_width;
    var new_groove_width_inner = (new_frame_width / calc_frame_width) - 5;

    geometry.dispose();

    var groove_shape = new THREE.Shape();
    groove_shape.moveTo(0 + 0, 0 + 5);
    groove_shape.lineTo(0, new_groove_width_inner);
    groove_shape.lineTo(5, new_groove_width_outer);
    groove_shape.lineTo(32, new_groove_width_outer);
    groove_shape.lineTo(37, new_groove_width_inner);
    groove_shape.lineTo(37, 5);
    groove_shape.lineTo(32, 0);
    groove_shape.lineTo(5, 0);
    groove_shape.lineTo(0, 5);

    geometry.dispose();

    var extrude_lenght = new_frame_height - (frame_thickness * 2);
    var extrudeSettings1 = {
        depth: extrude_lenght,
        bevelEnabled: false
    };
    object.geometry = new THREE.ExtrudeGeometry(groove_shape, extrudeSettings1);
}


export function change_groove_object_position(frame_thickness, geometry, object, groove_count) {
    jQuery(".measurement-input[name='width'], .measurement-input[name='height'], select#vert-rods, select#horz-rods, select#door-stacking-sill ").on("change", function () {
        groove_object_position(frame_thickness, rod_pos, rod_type, geometry, object, groove_count);
    });
}

export function groove_object_position(frame_thickness, geometry, object, groove_count) {
    var door_height = jQuery("select#door-height").val();
    var door_width = jQuery("select#door-width").val();

    var frame_height = jQuery(".measurement-input[name='height']").val();
    var frame_width = jQuery(".measurement-input[name='width']").val();

    var new_frame_width = frame_width - (frame_thickness * 2);
    var calc_frame_width = Math.floor(new_frame_width / 110);
    var new_groove_width = new_frame_width / calc_frame_width;

    var vert_rod_count = jQuery("select#vert-rods").val();
    var horz_rod_count = jQuery("select#horz-rods").val();
    var number_of_sills_doors = jQuery("select[name='door-stacking-sill']").val();
    var groove_width = 110;
    var frame_thickness_thick = 48;

    object.position.x = -(frame_width / 2) - new_groove_width + frame_thickness + (new_groove_width * groove_count);
    object.position.y = -(frame_height / 2) + frame_thickness;
    object.position.z = 70;
}